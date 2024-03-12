import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Chapter9 = () => {
  const { t } = useTranslation();
  return (
    <div className="p-4">
      <h2 className="mb-3 text-3xl font-extrabold text-center pb-4 border-b">
        {t('danielBook.chapter9.title')}
      </h2>
      <p className="mb-3">{t('danielBook.chapter9.description')}</p>
    </div>
  );
};

export default memo(Chapter9);
