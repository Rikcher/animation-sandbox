import { useChangeLocale, useCurrentLocale } from '@shared/lib/i18n/client';
import { useState, useEffect } from 'react';

export const useRootLayoutHeaderLngSwitcher = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  const isEn = locale === 'en';

  const handleLanguageChange = () => {
    sessionStorage.setItem('scrollPos', JSON.stringify({ x: window.scrollX, y: window.scrollY }));
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
    state: { isDisabled, isChecked: isEn },
    actions: { handleAnimationEnd, handleLanguageChange },
  };
};
