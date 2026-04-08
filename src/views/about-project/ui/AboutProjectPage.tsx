import { getI18n } from '@shared/lib/i18n/server';
import { setStaticParamsLocale } from 'next-international/server';

type AboutProjectPageProps = { params: Promise<{ locale: string }> };

export const AboutProjectPage = async (props: AboutProjectPageProps) => {
  const { params } = props;
  const { locale } = await params;
  setStaticParamsLocale(locale);

  const t = await getI18n();

  return <div>{t('about-project.title')}</div>;
};
