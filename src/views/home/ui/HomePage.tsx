import { ShowcaseCard } from '@widgets/showcase-card';
import type { AnimationToolType } from '@shared/types';
import { getI18n } from '@shared/lib/i18n/server';
import { setStaticParamsLocale } from 'next-international/server';

type HomePageProps = { params: Promise<{ locale: string }> };

export const HomePage = async (props: HomePageProps) => {
  const { params } = props;
  const { locale } = await params;
  setStaticParamsLocale(locale);

  const t = await getI18n();

  // TODO: remove later
  const types: AnimationToolType[] = ['threejs', 'sass', 'motion', 'gsap', 'animejs'];

  const cards = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    content: t('card.name', { number: i + 1 }),
    type: types[i % types.length],
  }));

  return (
    <div className="grid w-full max-w-360 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
      {cards.map((card) => (
        <ShowcaseCard key={card.id} type={card.type}>
          {card.content}
        </ShowcaseCard>
      ))}
    </div>
  );
};
