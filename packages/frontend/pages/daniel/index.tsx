import React, { memo, useState } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Carousel from '../../components/carousel';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Daniel = () => {
  const [slide, setSlide] = useState(0);
  const { t } = useTranslation();

  return (
    <div>
      <Carousel
        setSlide={setSlide}
        slide={slide}
        book={'daniel'}
        length={12}
        title={t('bookOfDaniel')}
      />
    </div>
  );
};

export default memo(Daniel);
