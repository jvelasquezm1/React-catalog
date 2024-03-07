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
    <div className="w-full">
      <div id="defaultTabContent">
        <div className="p-4 rounded-lg" id="about">
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900">
            {t('chapter3.title')}
          </h2>
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            {t('chapter3.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Chapter3);
