import React, { memo, useState } from 'react';

import Statue from '../../../../components/statue';
import Card from '../../../../components/card';
import { StatueIdentifiers } from '../../../../public/shared/identifiers';
import {
  BabylonMap,
  CalendarIcon,
  MapSVG,
  GreeceMap,
  MedoPersiaMap,
  RomeMap,
  Book,
  Pen,
  Symbols,
  BabylonTodayMap,
  Heaven,
  World,
} from '../../../../public/assets';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

enum SectionsChapter2 {
  History = 'history',
  Maps = 'maps',
  Verses = 'verses',
  Prophecy = 'prophecy',
  Symbols = 'symbols',
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Chapter2 = () => {
  const { t } = useTranslation();
  const [identifier, setIdentifier] = useState(StatueIdentifiers.Babylon);
  const [selectedSection, setSelectedSection] = useState(
    SectionsChapter2.History
  );

  const identifierToMap = {
    [StatueIdentifiers.Babylon]: BabylonMap,
    [StatueIdentifiers.MedoPersia]: MedoPersiaMap,
    [StatueIdentifiers.Greece]: GreeceMap,
    [StatueIdentifiers.Rome]: RomeMap,
    [StatueIdentifiers.DividedKingdom]: World,
    [StatueIdentifiers.HeavenKingdom]: Heaven,
  };

  const identifierToTodayMap = {
    [StatueIdentifiers.Babylon]: BabylonTodayMap,
    [StatueIdentifiers.MedoPersia]: MedoPersiaMap,
    [StatueIdentifiers.Greece]: GreeceMap,
    [StatueIdentifiers.Rome]: RomeMap,
    [StatueIdentifiers.DividedKingdom]: World,
    [StatueIdentifiers.HeavenKingdom]: '',
  };

  const sectionIcons = {
    [SectionsChapter2.History]: CalendarIcon,
    [SectionsChapter2.Maps]: MapSVG,
    [SectionsChapter2.Verses]: Book,
    [SectionsChapter2.Prophecy]: Pen,
    [SectionsChapter2.Symbols]: Symbols,
  };

  return (
    <div className="flex">
      <Statue
        setIdentifier={setIdentifier}
        t={t}
        identifierSelected={identifier}
      />
      <div className="m-4 flex flex-col bg-white text-black p-8 rounded-md space-y-4">
        <span className="text-lg font-semibold border-b-2 pb-4 text-center">
          {t(`chapter2.${identifier}.title`)}
        </span>
        <ol className="items-center flex justify-between border-b-2 pb-4">
          {Object.values(SectionsChapter2).map((section) => {
            const isSectionSelected = selectedSection === section;
            const IconComponent = sectionIcons[section];
            return (
              <li
                key={section}
                className="relative flex-1 cursor-pointer"
                onClick={() => setSelectedSection(section)}
              >
                <div className="flex items-center">
                  <div className={'flex w-full items-center shrink-0'}>
                    <IconComponent
                      className={`${
                        isSectionSelected
                          ? 'h-10 w-10 fill-white stroke-black'
                          : 'h-6 w-6 fill-gray-200 hover:fill-white stroke-black'
                      }`}
                    />
                    <div className="flex bg-gray-200 w-full h-0.5 " />
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="font-semibold">{t(`chapter2.${section}`)}</h3>
                  <time className="block mb-2 text-sm font-normal leading-none">
                    {t(`chapter2.${section}`)}
                  </time>
                </div>
              </li>
            );
          })}
        </ol>
        <Card
          className="h-[30rem]"
          description={t(`chapter2.${identifier}.${selectedSection}`)}
          footer={
            selectedSection === SectionsChapter2.Maps && (
              <div className="flex m-4 space-x-4">
                <Image
                  className={'w-[48%]'}
                  src={identifierToMap[identifier]}
                  alt={`${identifier}.${selectedSection}`}
                />
                {identifierToTodayMap[identifier] && (
                  <Image
                    className={'w-[48%]'}
                    src={identifierToTodayMap[identifier]}
                    alt={`${identifier}.${selectedSection}2`}
                  />
                )}
              </div>
            )
          }
        />
      </div>
    </div>
  );
};

export default memo(Chapter2);
