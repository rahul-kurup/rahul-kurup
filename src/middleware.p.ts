import { NextResponse } from 'next/server';

export function middleware(req: Request) {
  const url = new URL(req.url);

  if (url.pathname === '/') {
    url.pathname = '/home';
    return NextResponse.rewrite(url);
  }

  if (url.pathname === '/resume') {
    url.pathname = '/pdf/resume.pdf';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/resume']
};
