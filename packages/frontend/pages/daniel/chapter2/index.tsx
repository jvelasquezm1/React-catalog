import React, { memo, useState } from 'react';

import Statue from '../../../components/statue';
import Card from '../../../components/card';
import { StatueIdentifiers } from '../../../public/shared/identifiers';
import { CalendarIcon } from '../../../public/assets';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Chapter2 = () => {
  const { t } = useTranslation();
  const [identifier, setIdentifier] = useState(StatueIdentifiers.Babylon);

  return (
    <div className="flex">
      <Statue setIdentifier={setIdentifier} />
      <div className="m-4 flex flex-col flex-[0.65]">
        <Card
          title={t(`chapter2.${identifier}.title`)}
          description={t(`chapter2.${identifier}.description`)}
        />
        <div className="mt-auto mb-16">
          <ol className="items-center flex justify-between">
            {Object.values(StatueIdentifiers).map((id) => (
              <li key={id} className="relative mb-6 flex-1">
                <div className="flex items-center">
                  {id === StatueIdentifiers.HeavenKingdom && (
                    <div className="flex w-full bg-gray-200 h-0.5 "></div>
                  )}
                  <div className="z-10 flex items-center shrink-0">
                    <CalendarIcon
                      color={identifier === id ? 'black' : 'gray'}
                      size={identifier === id ? 30 : 24}
                    />
                  </div>

                  {id !== StatueIdentifiers.HeavenKingdom && (
                    <div className="flex w-full bg-gray-200 h-0.5 "></div>
                  )}
                </div>
                <div className="mt-3">
                  <h3 className="font-semibold text-gray-900">
                    {t(`chapter2.${id}.title`)}
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                    {t(`chapter2.${id}.years`)}
                  </time>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default memo(Chapter2);
