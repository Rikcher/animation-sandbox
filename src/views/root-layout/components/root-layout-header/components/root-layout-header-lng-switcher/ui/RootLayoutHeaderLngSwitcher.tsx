'use client';

import React, { useState } from 'react';
import { cn } from '@shared/lib/utils';
import { Switch as SwitchPrimitive } from 'radix-ui';
import styles from '../index.module.scss';

export const RootLayoutHeaderLngSwitcher = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      disabled={disabled}
      onCheckedChange={() => setDisabled(true)}
      className={cn(
        styles.root,
        'group/switch bg-background/85 focus-visible:border-ring focus-visible:ring-ring/50 relative flex inline-flex shrink-0 cursor-pointer items-center justify-center gap-14 overflow-hidden rounded-full border border-transparent px-4 py-2 transition-all outline-none focus-visible:ring-1',
      )}
    >
      <span
        onAnimationEnd={() => setDisabled(false)}
        className={cn(
          styles.switcher,
          'bg-foreground absolute inset-[calc(var(--spacing)*2)_50%_calc(var(--spacing)*2)_calc(var(--spacing)*2)] rounded-full',
        )}
      />
      <span className={cn(styles.en, 'relative text-sm font-bold')}>en</span>
      <span className={cn(styles.ru, 'relative text-sm font-bold')}>ru</span>
    </SwitchPrimitive.Root>
  );
};
