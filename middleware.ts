// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['es', 'en'],
  defaultLocale: 'es'
});

export const config = {
  matcher: [
    // Ruta base del sitio (home, páginas)
    '/((?!_next|favicon.ico|public|images|api).*)'
  ]
};
