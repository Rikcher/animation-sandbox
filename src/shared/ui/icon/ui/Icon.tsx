import React from 'react';
import type { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  id: string;
}

export const Icon = ({ id, ...props }: IconProps) => (
  <svg {...props}>
    <use href={`#${id}`} xlinkHref={`#${id}`} />
  </svg>
);
