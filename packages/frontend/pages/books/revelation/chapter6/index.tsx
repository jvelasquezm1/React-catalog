import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { memo } from 'react';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Chapter6 = () => {
  return <div className="flex">Capitulo 6</div>;
};

export default memo(Chapter6);
