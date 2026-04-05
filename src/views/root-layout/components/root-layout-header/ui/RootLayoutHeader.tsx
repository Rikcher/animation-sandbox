import React from 'react';
import Link from 'next/link';
import { RootLayoutHeaderLngSwitcher } from '../components/root-layout-header-lng-switcher';

export const RootLayoutHeader = () => {
  return (
    <header className="fixed z-999 flex h-(--root-header-height) w-full items-center justify-between gap-10 p-1 px-10 shadow-md backdrop-blur-xs">
      <Link href="/about-project" className="text-foreground">
        About Project
      </Link>
      <RootLayoutHeaderLngSwitcher />
    </header>
  );
};
