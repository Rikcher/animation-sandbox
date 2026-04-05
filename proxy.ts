import { createI18nMiddleware } from 'next-international/middleware';
import { NextRequest } from 'next/server';
import { LOCALES, DEFAULT_LOCALE } from '@shared/lib/i18n/config';

const I18nMiddleware = createI18nMiddleware({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  urlMappingStrategy: 'rewrite',
});

export function proxy(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
