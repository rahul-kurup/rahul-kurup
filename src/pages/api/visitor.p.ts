import config from '@config';
import mailer from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

const { mail } = config.serverOnly;

export default async function handler(
  { query, headers }: NextApiRequest,
  res: NextApiResponse
) {
  const name = (query.name || '') as string;
  if (name?.trim()) {
    try {
      const msg = {
        to: mail.to,
        from: { name: 'rahulkurup.com Moderator', email: mail.from },
        subject: `You have a new visitor`,
        text: `"${name}" visited the website on ${new Date().toISOString()}. Originated from ${
          headers.host
        }`
      };
      mailer.setApiKey(mail.sendGrid.apiKey);
      const res = await mailer.send(msg);
      console.log('Email sent', res);
    } catch (error) {
      console.log(error);
    }
  }

  res.status(200).json(true);
}
