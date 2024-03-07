import React, { memo, useState } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Carousel from '../../../components/carousel';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Revelation = () => {
  const [slide, setSlide] = useState(0);
  const { t } = useTranslation();

  return (
    <div>
      <Carousel
        setSlide={setSlide}
        slide={slide}
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

export default memo(Revelation);
