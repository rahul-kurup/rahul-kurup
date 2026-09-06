import { createServerFn } from '@tanstack/react-start';
import { getRequest } from '@tanstack/react-start/server';
import config from '@config';
import { env } from 'cloudflare:workers';

type VisitorInput = { name: string; token: string };

async function isPossiblyHuman(token: string): Promise<boolean> {
  if (!config.recaptcha.enabled) {
    return true;
  }

  const secret = env.RECAPTCHA_SECRET_KEY;

  try {
    const params = new URLSearchParams();
    if (secret) {
      params.set('secret', secret);
    }
    params.set('response', token);

    const resp = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        body: params.toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    const { success, score } = (await resp.json()) as {
      success: boolean;
      score: number;
    };

    return success && score >= 0.6;
  } catch (err) {
    console.error(err);
  }
  return false;
}

async function resend(name: string, host?: string) {
  const content = `"${name}" visited the website on ${new Date().toISOString()}. Originated from ${
    host || 'unknown'
  }.`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: env.MAIL_ACC_FROM,
      to: env.MAIL_ACC_TO?.split(',').map(m => m.trim()) ?? [],
      subject: `You have a new visitor - ${name}`,
      html: content,
      text: content
    })
  });

  return await res.json();
}

export const sendVisitor = createServerFn({ method: 'POST' })
  .validator((d: VisitorInput) => d)
  .handler(async ({ data }) => {
    const looksLikeHuman = await isPossiblyHuman(data.token);

    if (!env.RESEND_API_KEY || !looksLikeHuman) {
      return { success: false, reason: 'missing apikey' };
    }

    const name = data.name?.trim();

    if (!name) {
      return { success: false, reason: 'missing name' };
    }

    try {
      const request = getRequest();
      const host = request ? new URL(request.url).host : undefined;
      const resp = await resend(name, host);
      console.log('Email sent', resp);
      return { success: true };
    } catch (error) {
      console.error('Email send error', error);
      throw error;
    }
  });