import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Chapter3 = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="mb-3 text-3xl font-extrabold">{t('chapter3.title')}</h2>
      <p className="mb-3">{t('chapter3.description')}</p>
    </>
  );
};

export default memo(Chapter3);
