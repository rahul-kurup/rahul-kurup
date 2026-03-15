import config from '@config';
import { IncomingHttpHeaders } from 'http';
import type { NextApiRequest, NextApiResponse } from 'next';

const { mail, recaptcha } = config.serverOnly;

async function isPossiblyHuman(headers: IncomingHttpHeaders): Promise<boolean> {
  try {
    const recaptchaToken = headers[config.recaptcha.tokenHeader] as string;
    const body = {
      secret: recaptcha.secretKey,
      response: recaptchaToken
    };
    const params = new URLSearchParams(body);
    const url = `https://www.google.com/recaptcha/api/siteverify`;
    const resp = await fetch(url, {
      method: 'POST',
      body: params.toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const { success, score } = await resp.json();

    return success && score >= 0.6;
  } catch (err) {
    console.error(err);
  }
  return false;
}

async function resend(name: string, host?: string) {
  const content = `"${name}" visited the website on ${new Date().toISOString()}. Originated from ${
    host
  }`;
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${mail.resend.apiKey}`,
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
  const looksLikeHuman = await isPossiblyHuman(headers);
  if (mail.resend.apiKey && looksLikeHuman) {
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
