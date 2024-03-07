import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { memo } from 'react';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Chapter4 = () => {
  return <div className="flex">Capitulo 4</div>;
};

export default memo(Chapter4);
