import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Permitir acceso si ya está en /es, o accediendo a assets públicos
  if (
    pathname.startsWith('/es') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }

  // Redirigir todo lo demás a /es
  const url = request.nextUrl.clone();
  url.pathname = `/es${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|api|public|images).*)'],
};
