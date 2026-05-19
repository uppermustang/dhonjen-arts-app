import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'dhonjen-arts-api' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, commissionType, roomSize, message } = req.body;

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

  // Log for now — wire to email (Nodemailer, SendGrid, etc.) in production
  console.log('\n--- New commission request ---');
  console.log(JSON.stringify(submission, null, 2));
  console.log('----------------------------\n');

  res.status(201).json({
    success: true,
    message: 'Your commission request has been received. We will be in touch soon!',
  });
});

const clientDist = path.join(__dirname, '../client/dist');
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(clientDist));
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Dhonjen Arts API running on http://localhost:${PORT}`);
});
