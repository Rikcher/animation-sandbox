import React, { ReactNode } from 'react';
import { Card, CardContent } from '@shared/ui/shadcn';
import type { AnimationToolType } from '@shared/types';
import { AnimationToolLogo } from '@shared/ui/animation-tool-logo';

type ShowcaseCardProps = {
  type: AnimationToolType;
  children: ReactNode;
};

export const ShowcaseCard = (props: ShowcaseCardProps) => {
  const { type, children } = props;

  return (
    <Card className="relative min-h-75">
      <CardContent>{children}</CardContent>
      <AnimationToolLogo className="absolute right-4 bottom-4" type={type} />
    </Card>
  );
};
