import React, { memo } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import CarouselCard from '../../components/carouselCard';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Daniel = () => {
  const { t } = useTranslation();

  return (
    <CarouselCard
      title={t('bookOfDaniel')}
      description={
        'Daniel, el profeta sabio, narra sueños y visiones divinas, desentrañando el futuro con claridad. Desde la férrea fe en la adversidad hasta la victoria final del bien sobre el mal, Daniel es un faro de esperanza y sabiduría en el tejido de la historia bíblica y la humanidad.'
      }
      book={'daniel'}
      numberOfChapters={12}
    />
  );
};

export default memo(Daniel);
