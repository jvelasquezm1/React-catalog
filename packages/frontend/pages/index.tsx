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
    <div className="flex mt-[-3rem]">
      <div className="z-10 m-28 flex flex-col space-y-12">
        <span className="drop-shadow-xl text-7xl block">
          {t('biblicalProphecy')}
        </span>
        <span className="block w-[30rem] shadow-lg bg-slate-600 bg-opacity-50 p-4 rounded-lg">
          {t('prophecyDescription')}
        </span>
        <Link
          href="books"
          className="w-32 text-center bg-blue-500 hover:bg-blue-400 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Comenzar
        </Link>
      </div>
    </div>
  );
};

export default memo(Home);
