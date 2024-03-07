import React, { memo } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Books = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Link href="/daniel">{t('daniel')}</Link>
      <Link href="/revelation">{t('revelation')}</Link>
    </div>
  );
};

export default memo(Books);
