import React, { memo, useState } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Churches from './churches';
import {
  ChurchesIdentifiers,
  Identifiers,
} from '../../../../public/shared/identifiers';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Chapter1 = () => {
  const { t } = useTranslation();
  const [identifier, setIdentifier] = useState(ChurchesIdentifiers.Ephesus);
  const handleSetIdentifier = (newIdentifier: Identifiers) => {
    setIdentifier(newIdentifier as ChurchesIdentifiers);
  };

  return (
    <div className="p-4">
      <h2 className="mb-3 text-3xl font-extrabold text-center pb-4 border-b">
        {t('letters')}
      </h2>
      <div className="flex">
        <Churches
          setIdentifier={handleSetIdentifier}
          t={t}
          identifierSelected={identifier}
        />
        <div className="m-4 flex w-full flex-col bg-white text-black p-8 rounded-md space-y-4"></div>
      </div>
    </div>
  );
};

export default memo(Chapter1);
