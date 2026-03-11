import config from '@config';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const { mail } = config.serverOnly;

export default async function handler(
  { query, headers }: NextApiRequest,
  res: NextApiResponse
) {
  if (mail.resend.apiKey) {
    const name = (query.name || '') as string;
    if (name?.trim()) {
      try {
        const resend = new Resend(mail.resend.apiKey);
        const mailerResponse = await resend.emails.send({
          to: mail.to,
          from: mail.from,
          subject: `You have a new visitor - ${name}`,
          text: `"${name}" visited the website on ${new Date().toISOString()}. Originated from ${
            headers.host
          }`
        });
        console.log('Email sent', mailerResponse);
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(503).json({ success: 'Email send error', error });
      }
    }
  } else {
    res.status(503).json({ success: false, reason: 'missing apikey' });
  }
}
