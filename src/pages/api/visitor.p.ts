import config from '@config';
import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const { mail } = config.serverOnly;
const resend = new Resend(mail.resend.apiKey);

export default async function handler(
  { query, headers }: NextApiRequest,
  res: NextApiResponse
) {
  const name = (query.name || '') as string;
  if (name?.trim()) {
    try {
      const mailerResponse = await resend.emails.send({
        to: mail.to,
        from: mail.from,
        subject: `You have a new visitor - ${name}`,
        text: `"${name}" visited the website on ${new Date().toISOString()}. Originated from ${
          headers.host
        }`
      });
      console.log('Email sent', mailerResponse);
      res.status(200).json(true);
    } catch (error) {
      console.error('Email send error', error);
      res.status(200).json(false);
    }
  }
}
