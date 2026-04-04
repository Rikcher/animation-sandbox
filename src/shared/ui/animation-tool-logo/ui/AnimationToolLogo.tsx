import React from 'react';
import type { AnimationToolType } from '@shared/types';
import { animationToolLogoMap } from '../model/animationToolLogoMap';
import { cn } from '@shared/lib/utils';
import Image from 'next/image';

type AnimationToolLogoProps = {
  type: AnimationToolType;
  height?: number | string;
  width?: number | string;
  className?: string;
};

export const AnimationToolLogo = (props: AnimationToolLogoProps) => {
  const { height, width, type, className } = props;
  const { src, alt, defaultHeight, defaultWidth } = animationToolLogoMap(type);

  if (!src) return null;

  return (
    <div
      style={{ width: width ? width : defaultWidth, height: height ? height : defaultHeight }}
      className={cn('relative', className)}
    >
      <Image src={src} alt={alt} fill className="object-contain object-bottom-right" />
    </div>
  );
};
