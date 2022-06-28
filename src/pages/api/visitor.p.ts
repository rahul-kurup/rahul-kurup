import config from '@config';
import type { NextApiRequest, NextApiResponse } from 'next';
import mailer from 'nodemailer';

const { mail } = config.serverOnly;

export default async function handler(
  { query, headers }: NextApiRequest,
  res: NextApiResponse
) {
  const name = (query.name || '') as string;
  if (name?.trim()) {
    try {
      const transporter = mailer.createTransport({
        service: mail.service,
        auth: {
          user: mail.account,
          pass: mail.password
        }
      });

      await new Promise((resolve, reject) => {
        transporter.sendMail(
          {
            from: `"rahulkurup.com Moderator" <${mail.from}>`,
            to: mail.to,
            subject: `You have a new visitor`,
            text: `"${name}" visited the website on ${new Date().toISOString()}. Originated from ${
              headers.referer
            }`
          },
          (err, info) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              console.log(info);
              resolve(info);
            }
          }
        );
      });
    } catch (error) {
      console.error(error);
    }
  }

  res.status(200).json(true);
}
