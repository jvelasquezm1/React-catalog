import React, { memo } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import CarouselCard from '../../../components/carouselCard';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Revelation = () => {
  const { t } = useTranslation();

  return (
    <CarouselCard
      title={t('bookOfRevelation')}
      description={
        'En Apocalipsis, las revelaciones apocalípticas pintan un lienzo profético del fin de los tiempos. Entre simbolismos y visiones, emerge un mensaje de redención, juicio y victoria divina. Apocalipsis guía a la humanidad hacia la esperanza celestial en medio de la complejidad del destino eterno.'
      }
      book={'revelation'}
      numberOfChapters={7}
      titles={[
        '1 - 3',
        '4 - 7',
        '8 - 11',
        '12 - 14',
        '15 - 16',
        '17 - 20',
        '21 - 22',
      ]}
    />
  );
};

export default memo(Revelation);
