import config from '@config';
import type { NextApiRequest, NextApiResponse } from 'next';

const { mail } = config.serverOnly;

async function resend(name: string, host?: string) {
  const content = `"${name}" visited the website on ${new Date().toISOString()}. Originated from ${
    host
  }`;
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: mail.from,
      to: mail.to,
      subject: `You have a new visitor - ${name}`,
      html: content,
      text: content
    })
  });

  return await res.json();
}

export default async function handler(
  { query, headers }: NextApiRequest,
  res: NextApiResponse
) {
  if (mail.resend.apiKey) {
    const name = (query.name || '') as string;
    if (name?.trim()) {
      try {
        const resp = await resend(name, headers.host);
        console.log('Email sent', resp);
        res.status(200).json({ success: true, resp });
      } catch (error) {
        res.status(503).json({ success: 'Email send error', error });
      }
    }
  } else {
    res.status(503).json({ success: false, reason: 'missing apikey' });
  }
}
