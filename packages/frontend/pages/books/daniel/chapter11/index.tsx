import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { memo } from 'react';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Chapter11 = () => {
  return <div className="flex">Capitulo 11</div>;
};

export default memo(Chapter11);
