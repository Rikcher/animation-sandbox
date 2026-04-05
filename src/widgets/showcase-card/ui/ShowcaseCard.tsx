import React, { ReactNode } from 'react';
import { Card, CardContent, CardFooter } from '@shared/ui/shadcn';
import type { AnimationToolType } from '@shared/types';
import { AnimationToolLogo } from '@shared/ui/animation-tool-logo';

type ShowcaseCardProps = {
  type: AnimationToolType;
  children: ReactNode;
};

export const ShowcaseCard = (props: ShowcaseCardProps) => {
  const { type, children } = props;

  return (
    <Card className="relative flex min-h-75 flex-col">
      <CardContent className="flex-1">{children}</CardContent>
      <CardFooter className="flex h-10 items-end justify-end border-none p-2">
        <AnimationToolLogo type={type} />
      </CardFooter>
    </Card>
  );
};
