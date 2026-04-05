import React from 'react';
import Link from 'next/link';

export const RootLayoutHeader = () => {
  return (
    <header className="fixed z-999 flex h-(--root-header-height) w-full items-center justify-center shadow-md backdrop-blur-xs">
      <Link href="/about-project">About Project</Link>
    </header>
  );
};
