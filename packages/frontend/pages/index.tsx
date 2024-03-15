import React, { memo } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="m-auto mt-[-3rem] z-10 flex flex-col space-y-12 items-center">
      <p className="mt-40 drop-shadow-xl text-7xl">{t('biblicalProphecy')}</p>
      <p className="container">{t('prophecyDescription')}</p>
      <Link
        href="books"
        className="w-32 text-center bg-blue-500 hover:bg-blue-400 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        {t('continue')}
      </Link>
    </div>
  );
};

export default memo(Home);
