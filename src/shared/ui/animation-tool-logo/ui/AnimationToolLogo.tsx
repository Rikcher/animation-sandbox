import type { AnimationToolType } from '@shared/types';
import { Icon } from '@shared/ui/icon';
import { animationToolLogoMap } from '../model/animationToolLogoMap';

type AnimationToolLogoProps = {
  type: AnimationToolType;
  height?: number | string;
  width?: number | string;
  className?: string;
};

export const AnimationToolLogo = (props: AnimationToolLogoProps) => {
  const { height, width, type, className } = props;
  const { defaultHeight, defaultWidth } = animationToolLogoMap(type);

  return (
    <Icon
      id={type}
      height={height ? height : defaultHeight}
      className={className}
      width={width ? width : defaultWidth}
    />
  );
};
