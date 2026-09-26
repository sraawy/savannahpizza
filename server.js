/* ============================================================
   SAVANNAH PIZZA — server.js
   Node.js / Express backend with Meta WhatsApp Cloud API
   ============================================================ */

require('dotenv').config();
const express = require('express');
const axios   = require('axios');
const cors    = require('cors');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

/* ─── Middleware ─────────────────────────────────────────── */
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));   // Serve frontend files

/* ─── Meta API Config ────────────────────────────────────── */
const META_API_URL = `https://graph.facebook.com/v19.0/${process.env.META_PHONE_NUMBER_ID}/messages`;
const META_HEADERS = {
  Authorization: `Bearer ${process.env.META_ACCESS_TOKEN}`,
  'Content-Type': 'application/json'
};

/* ─── Helpers ─────────────────────────────────────────────── */

/**
 * Send a WhatsApp text message via Meta Cloud API
 * @param {string} to   - Recipient phone (no +, e.g. "213555123456")
 * @param {string} body - Message text
 */
async function sendWhatsApp(to, body) {
  const payload = {
    messaging_product: 'whatsapp',
    recipient_type:    'individual',
    to,
    type: 'text',
    text: { preview_url: false, body }
  };

  const response = await axios.post(META_API_URL, payload, { headers: META_HEADERS });
  return response.data;
}

/**
 * Format the order items into a readable string
 */
function formatItems(items) {
  return items.map(item => {
    let line = `  • ${item.qty}x ${item.name}`;
    if (item.addons && item.addons.length) {
      line += `\n    + ${item.addons.map(a => a.name).join(', ')}`;
    }
    line += `  →  ${item.total.toLocaleString('fr-DZ')} DA`;
    return line;
  }).join('\n');
}

/**
 * Build the restaurant notification message
 */
function buildRestaurantMessage(order) {
  const { type, customerName, customerPhone, tableNumber, address, items, grandTotal, note } = order;

  const isDineIn   = type === 'dine-in';
  const typeLabel  = isDineIn ? '🍽️ SUR PLACE' : '🏠 LIVRAISON';
  const typeDetail = isDineIn
    ? `📍 Table N° : *${tableNumber}*`
    : `📍 Adresse  : *${address}*`;

  const itemsText  = formatItems(items);
  const noteText   = note ? `\n📝 Note       : ${note}` : '';

  return (
    `🍕 *NOUVELLE COMMANDE — SAVANNAH*\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `🔖 Type       : *${typeLabel}*\n` +
    `👤 Client     : *${customerName}*\n` +
    `📱 Téléphone  : *${customerPhone}*\n` +
    `${typeDetail}` +
    `${noteText}\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `🛒 *ARTICLES :*\n${itemsText}\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `💰 *TOTAL : ${grandTotal.toLocaleString('fr-DZ')} DA*\n` +
    `⏰ Reçue à : ${new Date().toLocaleTimeString('fr-DZ', { hour: '2-digit', minute: '2-digit' })}`
  );
}

/**
 * Build the customer confirmation message
 */
function buildCustomerMessage(order) {
  const { type, customerName, tableNumber, address, items, grandTotal } = order;
  const isDineIn  = type === 'dine-in';
  const typeInfo  = isDineIn
    ? `Table N° *${tableNumber}*`
    : `Livraison à *${address}*`;
  const eta       = isDineIn ? '15–20 minutes' : '30–45 minutes';
  const itemsText = formatItems(items);

  return (
    `✅ *Commande confirmée — SAVANNAH*\n\n` +
    `Bonjour *${customerName}* ! 👋\n` +
    `Votre commande a bien été reçue.\n\n` +
    `📋 *Récapitulatif :*\n${itemsText}\n\n` +
    `💰 Total : *${grandTotal.toLocaleString('fr-DZ')} DA*\n` +
    `📍 ${typeInfo}\n` +
    `⏱️ Délai estimé : *${eta}*\n\n` +
    `Merci de votre confiance ! 🙏\n` +
    `_SAVANNAH — Mostaganem, Salamandre_`
  );
}

/* ─── Routes ─────────────────────────────────────────────── */

/** Health check */
app.get('/api/health', (req, res) => {
  res.json({
    status:    'ok',
    service:   'SAVANNAH Pizza Backend',
    timestamp: new Date().toISOString()
  });
});

/**
 * POST /api/order
 * Body:
 * {
 *   type:          "dine-in" | "delivery"
 *   customerName:  string
 *   customerPhone: string  (digits only, e.g. "213XXXXXXXXX")
 *   tableNumber:   string  (required if type === "dine-in")
 *   address:       string  (required if type === "delivery")
 *   note:          string  (optional)
 *   items:         Array<{ name, qty, price, total, addons: [{name, emoji}] }>
 *   grandTotal:    number
 * }
 */
app.post('/api/order', async (req, res) => {
  try {
    const order = req.body;

    /* ── Validate ── */
    const { type, customerName, customerPhone, tableNumber, address, items, grandTotal } = order;

    if (!type || !['dine-in', 'delivery'].includes(type)) {
      return res.status(400).json({ error: 'Invalid order type. Must be "dine-in" or "delivery".' });
    }
    if (!customerName || !customerName.trim()) {
      return res.status(400).json({ error: 'Customer name is required.' });
    }
    if (!customerPhone || !/^\d{9,15}$/.test(customerPhone.replace(/\s/g, ''))) {
      return res.status(400).json({ error: 'Valid customer phone number is required.' });
    }
    if (type === 'dine-in' && !tableNumber) {
      return res.status(400).json({ error: 'Table number is required for dine-in orders.' });
    }
    if (type === 'delivery' && (!address || !address.trim())) {
      return res.status(400).json({ error: 'Delivery address is required.' });
    }
    if (!items || !items.length) {
      return res.status(400).json({ error: 'Order must contain at least one item.' });
    }

    /* ── Format messages ── */
    const restaurantMsg = buildRestaurantMessage(order);
    const customerMsg   = buildCustomerMessage(order);

    /* ── Send to restaurant ── */
    const restaurantPhone = process.env.RESTAURANT_WHATSAPP;
    await sendWhatsApp(restaurantPhone, restaurantMsg);

    /* ── Send confirmation to customer ── */
    const cleanPhone = customerPhone.replace(/\s|\+|-/g, '');
    await sendWhatsApp(cleanPhone, customerMsg);

    /* ── Respond success ── */
    res.json({
      success: true,
      message: 'Order placed successfully. WhatsApp confirmations sent!',
      orderId: `SAV-${Date.now()}`
    });

  } catch (err) {
    console.error('Order error:', err?.response?.data || err.message);

    /* If Meta API returns an error, forward it clearly */
    const metaError = err?.response?.data?.error?.message;
    res.status(500).json({
      error:   metaError || 'Server error — could not place order.',
      details: err.message
    });
  }
});

/* ─── Fallback: serve index.html for all non-API routes ── */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

/* ─── Start ─────────────────────────────────────────────── */
app.listen(PORT, () => {
  console.log(`\n🍕 SAVANNAH Backend running on http://localhost:${PORT}`);
  console.log(`📡 WhatsApp Phone Number ID : ${process.env.META_PHONE_NUMBER_ID || '⚠ NOT SET'}`);
  console.log(`📱 Restaurant WhatsApp      : ${process.env.RESTAURANT_WHATSAPP || '⚠ NOT SET'}`);
  console.log(`🔑 Meta Token               : ${process.env.META_ACCESS_TOKEN ? '✓ SET' : '⚠ NOT SET'}\n`);
});
