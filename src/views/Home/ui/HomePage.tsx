import { ShowcaseCard } from '@widgets/showcase-card';
import type { AnimationToolType } from '@shared/types';
import { useMemo } from 'react';

export const HomePage = () => {
  // TODO: remove later
  const types: AnimationToolType[] = ['threejs', 'sass', 'motion', 'gsap', 'animejs'];

  const cards = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      content: `Card ${i + 1}`,
      type: types[i % types.length],
    }));
  }, [types]);

  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-center bg-black font-sans">
      <div className="grid w-full max-w-360 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-10">
        {cards.map((card) => (
          <ShowcaseCard key={card.id} type={card.type}>
            {card.content}
          </ShowcaseCard>
        ))}
      </div>
    </main>
  );
};
