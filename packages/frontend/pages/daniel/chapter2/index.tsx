import React, { memo, useState } from 'react';

import Statue from '../../../components/statue';
import Modal from '../../../components/modal';
import Card from '../../../components/card';
import { StatueIdentifiers } from '../../../public/shared/identifiers';
import {
  BabylonMap,
  CalendarIcon,
  GreeceMap,
  MedoPersiaMap,
  RomeMap,
} from '../../../public/assets';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Chapter2 = () => {
  const { t } = useTranslation();
  const [identifier, setIdentifier] = useState(StatueIdentifiers.Babylon);
  const [openModal, setOpenModal] = useState(false);

  const identifierToMap = {
    [StatueIdentifiers.Babylon]: BabylonMap,
    [StatueIdentifiers.MedoPersia]: MedoPersiaMap,
    [StatueIdentifiers.Greece]: GreeceMap,
    [StatueIdentifiers.Rome]: RomeMap,
    [StatueIdentifiers.DividedRome]: GreeceMap,
    [StatueIdentifiers.HeavenKingdom]: GreeceMap,
  };

  return (
    <div className="flex">
      <Statue setIdentifier={setIdentifier} />
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <Card
            className="h-[30rem]"
            title={t(`chapter2.${identifier}.title`)}
            description={t(`chapter2.${identifier}.description`)}
            footer={
              <div className="flex m-4">
                <Image
                  className={'w-[500px]'}
                  src={identifierToMap[identifier]}
                  alt={'statue'}
                />
                <span className="m-4">
                  {t(`chapter2.${identifier}.description`)}
                </span>
              </div>
            }
          />
        </Modal>
      )}
      <div className="m-4 flex flex-col flex-[0.65]">
        <Card
          className="h-[30rem]"
          title={t(`chapter2.${identifier}.title`)}
          description={t(`chapter2.${identifier}.description`)}
          footer={
            <div className="w-full flex">
              <button
                className="ml-auto m-4 border p-2 rounded-md bg-gray-800"
                onClick={() => setOpenModal(true)}
              >
                <span className="text-white">{t(`knowMore`)}...</span>
              </button>
            </div>
          }
        />
        <div className="mt-auto mb-16">
          <ol className="items-center flex justify-between">
            {Object.values(StatueIdentifiers).map((id) => {
              const isIdSelected = identifier === id;
              return (
                <li key={id} className="relative mb-6 flex-1">
                  <div className="flex items-center">
                    {id === StatueIdentifiers.HeavenKingdom && (
                      <div className="flex w-full bg-gray-200 h-0.5 "></div>
                    )}
                    <div
                      className={'flex items-center shrink-0 cursor-pointer'}
                      onClick={() => setIdentifier(id)}
                    >
                      <CalendarIcon
                        className={`${
                          isIdSelected
                            ? 'h-8 w-8 fill-black hover:fill-slate-600'
                            : 'h-6 w-6 fill-gray-500'
                        }`}
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
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default memo(Chapter2);
