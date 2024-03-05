import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { memo } from 'react';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Chapter2 = () => {
  return <div className="flex">Capitulo 2</div>;
};

export default memo(Chapter2);
