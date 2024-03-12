import React, { memo } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Chapter8 = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h2 className="mb-3 text-3xl font-extrabold text-center pb-4 border-b">
        {t('danielBook.chapter8.title')}
      </h2>
      <p>{t('danielBook.chapter8.2300EveningsAndMornings')}</p>
    </div>
  );
};

export default memo(Chapter8);
