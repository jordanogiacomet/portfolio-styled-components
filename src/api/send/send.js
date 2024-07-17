/* eslint-disable no-undef */
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    try {
      const { data, error } = await resend.emails.send({
        from: `${email}`,
        to: ['jordanog2002@gmail.com'],
        subject: subject,
        html: `<strong>${message}</strong>`,
      });

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}