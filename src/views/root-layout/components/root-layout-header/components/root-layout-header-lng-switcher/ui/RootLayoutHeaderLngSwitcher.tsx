'use client';

import { cn } from '@shared/lib/utils';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import styles from '../index.module.scss';
import { useRootLayoutHeaderLngSwitcher } from '../model/useRootLayoutHeaderLngSwitcher';

export const RootLayoutHeaderLngSwitcher = () => {
  const {
    state: { isChecked, isDisabled, shouldAnimate },
    actions: { handleLanguageChange, handleAnimationEnd },
  } = useRootLayoutHeaderLngSwitcher();

  return (
    <CheckboxPrimitive.Root
      disabled={shouldAnimate ? isDisabled : false}
      checked={isChecked}
      onCheckedChange={handleLanguageChange}
      onAnimationEndCapture={handleAnimationEnd}
      className={cn(
        styles.root,
        shouldAnimate && styles.root_animate,
        'group/switch bg-background/85 focus-visible:border-ring focus-visible:ring-ring/50 relative flex inline-flex shrink-0 cursor-pointer items-center justify-center gap-14 overflow-hidden rounded-full border border-transparent px-4 py-2 transition-all outline-none focus-visible:ring-1',
      )}
    >
      <span
        className={cn(
          styles.switcher,
          'bg-foreground absolute inset-[calc(var(--spacing)*2)_50%_calc(var(--spacing)*2)_calc(var(--spacing)*2)] rounded-full transition-all duration-300',
        )}
      />
      <span className={cn(styles.enLocale, 'relative text-sm font-bold')}>
        en
      </span>
      <span className={cn(styles.ruLocale, 'relative text-sm font-bold')}>
        ru
      </span>
    </CheckboxPrimitive.Root>
  );
};
