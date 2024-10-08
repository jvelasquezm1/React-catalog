import React, { memo } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import BookCard from '../components/bookCard';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex mt-24">
      <BookCard
        link={'/daniel'}
        description={
          'Daniel en la Biblia revela profecías intrigantes que abordan eventos futuros y establecen lecciones intemporales. Sus visiones proféticas ofrecen perspectivas sobre el presente, inspirando confianza y reflexión en la búsqueda de un significado más profundo en nuestra vida actual.'
        }
        title={t('daniel')}
        buttonTitle={t('continue')}
      />
      <BookCard
        link={'/revelation'}
        description={
          'El Apocalipsis, último libro de la Biblia, desentraña visiones apocalípticas. Revela simbolismos, anticipa eventos finales y promete esperanza. Su mensaje trasciende épocas, ofreciendo guía y consuelo para los desafíos contemporáneos'
        }
        title={t('revelation')}
        buttonTitle={t('continue')}
      />
    </div>
  );
};

export default memo(Home);
