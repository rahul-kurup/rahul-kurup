import config from '@config';
import type { NextApiRequest, NextApiResponse } from 'next';
import mailer from 'nodemailer';

const { mail } = config.serverOnly;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const name = (req.query.name || '') as string;
  if (name?.trim()) {
    const transport = mailer.createTransport({
      service: mail.service,
      auth: {
        user: mail.account,
        pass: mail.password
      }
    });

    try {
      transport
        .sendMail({
          from: `"rahulkurup.com Moderator" <${mail.from}>`,
          to: mail.to,
          subject: `You have a new visitor`,
          text: `"${name}" visited the website on ${new Date().toISOString()}. Originated from ${
            req.headers.referer
          }`
        })
        .then();
    } catch (error) {
      console.error(error);
    }
  }

  res.status(200).json(true);
}
