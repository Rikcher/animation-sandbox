import { useChangeLocale, useCurrentLocale } from '@shared/lib/i18n/client';
import { useEffect, useState } from 'react';

export const useRootLayoutHeaderLngSwitcher = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  const isEn = locale === 'en';

  const [shouldAnimate] = useState(() => {
    if (typeof window === 'undefined') return false;

    const prevLocale = sessionStorage.getItem('prevLocale');

    if (prevLocale && prevLocale !== locale) {
      sessionStorage.removeItem('prevLocale');
      return true;
    }

    return false;
  });

  const handleLanguageChange = () => {
    sessionStorage.setItem(
      'scrollPos',
      JSON.stringify({ x: window.scrollX, y: window.scrollY }),
    );

    sessionStorage.setItem('prevLocale', locale);

    changeLocale(isEn ? 'ru' : 'en');
  };

  const handleAnimationEnd = () => {
    setIsDisabled(false);
  };

  useEffect(() => {
    const scrollPos = sessionStorage.getItem('scrollPos');
    if (scrollPos) {
      const { x, y } = JSON.parse(scrollPos);
      window.scrollTo(x, y);
      sessionStorage.removeItem('scrollPos');
    }
  }, []);

  return {
    state: { isDisabled, isChecked: isEn, shouldAnimate },
    actions: { handleAnimationEnd, handleLanguageChange },
  };
};
