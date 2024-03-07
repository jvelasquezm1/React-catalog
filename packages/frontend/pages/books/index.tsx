import React, { memo } from 'react';

import Card from './card';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Books = () => {
  const { t } = useTranslation();

  return (
    <div className="h-svh flex mt-[-3rem] justify-between">
      <div
        className={`flex-1 bg-[url('../public/assets/images/lion.jpeg')] text-center bg-cover bg-center`}
      >
        <Card
          link={'/books/daniel'}
          description={
            'Daniel en la Biblia revela profecías intrigantes que abordan eventos futuros y establecen lecciones intemporales. Sus visiones proféticas ofrecen perspectivas sobre el presente, inspirando confianza y reflexión en la búsqueda de un significado más profundo en nuestra vida actual.'
          }
          title={t('daniel')}
          buttonTitle={t('continue')}
        />
      </div>
      <div
        className={`flex-1 bg-[url('../public/assets/images/horse.jpeg')] text-center bg-cover bg-center`}
      >
        <Card
          link={'/books/revelation'}
          description={
            'El Apocalipsis, último libro de la Biblia, desentraña visiones apocalípticas. Revela simbolismos, anticipa eventos finales y promete esperanza. Su mensaje trasciende épocas, ofreciendo guía y consuelo para los desafíos contemporáneos'
          }
          title={t('revelation')}
          buttonTitle={t('continue')}
        />
      </div>
    </div>
  );
};

export default memo(Books);
