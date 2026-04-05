import type { AnimationToolType } from '@shared/types';

export const animationToolLogoMap = (type: AnimationToolType) => {
  switch (type) {
    case 'threejs':
      return {
        defaultWidth: 24,
        defaultHeight: 24,
      };
    case 'sass':
      return { defaultWidth: 34, defaultHeight: 24 };
    case 'motion':
      return { defaultWidth: 24, defaultHeight: 24 };
    case 'gsap':
      return { defaultWidth: 32, defaultHeight: 12 };
    case 'animejs':
      return {
        defaultWidth: 62,
        defaultHeight: 14,
      };
    default:
      return { src: '', alt: '' };
  }
};
