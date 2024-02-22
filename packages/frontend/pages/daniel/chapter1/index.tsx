import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations('es', ['common'])),
  },
});

const Chapter1 = () => {
  const { t } = useTranslation();
  return <div className="flex">Capitulo 1 {t('greeting')}</div>;
};

export default memo(Chapter1);
