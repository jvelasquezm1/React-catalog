import React, { memo, useState } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Carousel from '../components/carousel';
import { useTranslation } from 'next-i18next';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Home = () => {
  const [danielSlide, setDanielSlide] = useState(0);
  const [revelationsSlide, setRevelationsSlide] = useState(0);
  const { t } = useTranslation();

  return (
    <div>
      <Carousel
        setSlide={setDanielSlide}
        slide={danielSlide}
        book={'daniel'}
        length={12}
        title={t('bookOfDaniel')}
      />
      <Carousel
        setSlide={setRevelationsSlide}
        slide={revelationsSlide}
        book={'revelation'}
        length={7}
        titles={[
          '1 - 3',
          '4 - 7',
          '8 - 11',
          '12 - 14',
          '15 - 16',
          '17 - 20',
          '21 - 22',
        ]}
        title={t('bookOfRevelation')}
      />
    </div>
  );
};

export default memo(Home);
