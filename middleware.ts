import { createI18nMiddleware } from 'fumadocs-core/i18n';
import { i18n } from '@/lib/i18n';
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from 'next/server';

const fumaMiddleware: NextMiddleware = createI18nMiddleware(i18n);

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export function middleware(request: NextRequest, event: NextFetchEvent) {
  if (request.nextUrl.pathname.startsWith('/docs') ||
    i18n.languages.some((lang) => request.nextUrl.pathname.startsWith(`/${lang}/docs`))) {
    return fumaMiddleware(request, event);
  }

  return NextResponse.next();
}
