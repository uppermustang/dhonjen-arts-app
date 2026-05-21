/** Vercel serverless handler — same logic as server/index.js contact route */
export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, commissionType, roomSize, message } = req.body || {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({
      error: 'Name, email, and message are required.',
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const submission = {
    name: name.trim(),
    email: email.trim(),
    phone: phone?.trim() || '',
    commissionType: commissionType || 'Not specified',
    roomSize: roomSize?.trim() || '',
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  };

  console.log('New commission request:', JSON.stringify(submission, null, 2));

  return res.status(201).json({
    success: true,
    message: 'Your commission request has been received. We will be in touch soon!',
  });
}
