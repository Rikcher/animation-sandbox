import { getI18n } from '@shared/lib/i18n/server';
import { Icon } from '@shared/ui/icon';
import Link from 'next/link';
import { RootLayoutHeaderLngSwitcher } from '../components/root-layout-header-lng-switcher';

export const RootLayoutHeader = async () => {
  const t = await getI18n();

  return (
    <header className="fixed z-999 h-(--root-header-height) w-full shadow-md backdrop-blur-xs">
      <nav className="mx-auto flex max-w-360 flex-1 items-center justify-between gap-10 p-1 px-10 h-full">
        <Link href="/" className="text-foreground font-semibold">
          <Icon id="project-logo" width={78} height={30} />
        </Link>
        <Link href="/about-project" className="text-foreground font-semibold">
          {t('navbar.about.title')}
        </Link>
        <RootLayoutHeaderLngSwitcher />
      </nav>
    </header>
  );
};
