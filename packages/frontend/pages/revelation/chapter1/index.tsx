import React, { memo, useState } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Churches from './churches';
import {
  ChurchesIdentifiers,
  Identifiers,
} from '../../../public/shared/identifiers';
import { Paper } from '../../../public/assets';
import Image from 'next/image';

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
        <div className="m-4 relative">
          <Image src={Paper} alt={'paper'} />
          <div className="absolute top-0 text-black shadow-lg shadow-black ml-32 mr-32 mt-16 w-[75%] p-4 rounded">
            <p className="p-8 text-xl font-extrabold text-center">
              {t(`revelationLetters.${identifier}.title`)}
            </p>
            <p className="block text-justify text-base border-t border-black p-8 font-semibold">
              {t(`revelationLetters.${identifier}.description`)}
            </p>
            <div className="flex justify-center m-12">
              <iframe
                key={identifier}
                width="500"
                height="300"
                src={t(`revelationLetters.${identifier}.map`)}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Chapter1);
