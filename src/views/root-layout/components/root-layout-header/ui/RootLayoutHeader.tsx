import React from 'react';
import Link from 'next/link';
import { RootLayoutHeaderLngSwitcher } from '../components/root-layout-header-lng-switcher';
import { getI18n } from '@shared/lib/i18n/server';

export const RootLayoutHeader = async () => {
  const t = await getI18n();

  return (
    <header className="fixed z-999 h-(--root-header-height) w-full shadow-md backdrop-blur-xs">
      <nav className="mx-auto flex max-w-360 flex-1 items-center justify-between gap-10 p-1 px-10">
        <Link href="/about-project" className="text-foreground">
          {t('navbar.about.title')}
        </Link>
        <RootLayoutHeaderLngSwitcher />
      </nav>
    </header>
  );
};
