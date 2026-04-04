import type { AnimationToolType } from '@shared/types';

export const animationToolLogoMap = (type: AnimationToolType) => {
  switch (type) {
    case 'threejs':
      return {
        src: '/three-js-logo.svg',
        alt: 'three-js-logo',
        defaultWidth: 24,
        defaultHeight: 24,
      };
    case 'sass':
      return { src: '/sass-logo.svg', alt: 'sass-logo', defaultWidth: 34, defaultHeight: 24 };
    case 'motion':
      return { src: '/motion-logo.svg', alt: 'motion-logo', defaultWidth: 24, defaultHeight: 24 };
    case 'gsap':
      return { src: '/gsap-logo.svg', alt: 'gsap-logo', defaultWidth: 32, defaultHeight: 12 };
    case 'animejs':
      return {
        src: '/anime-js-logo.svg',
        alt: 'anime-js-logo',
        defaultWidth: 62,
        defaultHeight: 14,
      };
    default:
      return { src: '', alt: '' };
  }
};
