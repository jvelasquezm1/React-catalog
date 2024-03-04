import React, { memo, useState } from 'react';

import Statue from '../../../components/statue';
import Card from '../../../components/card';
import { StatueIdentifiers } from '../../../public/shared/identifiers';
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
} from '../../../public/assets';
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
    [StatueIdentifiers.DividedRome]: GreeceMap,
    [StatueIdentifiers.HeavenKingdom]: GreeceMap,
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
      <div className="m-4 flex flex-col">
        <Card
          className="h-[30rem]"
          title={t(`chapter2.${identifier}.title`)}
          description={t(`chapter2.${identifier}.${selectedSection}`)}
          footer={
            selectedSection === SectionsChapter2.Maps && (
              <Image
                className={'w-[500px] m-4'}
                src={identifierToMap[identifier]}
                alt={'statue'}
              />
            )
          }
        />
        <div className="mt-auto mb-16">
          <ol className="mt-12 items-center flex justify-between">
            {Object.values(SectionsChapter2).map((section) => {
              const isSectionSelected = selectedSection === section;
              const IconComponent = sectionIcons[section];
              return (
                <li
                  key={section}
                  className="relative mb-6 flex-1 cursor-pointer"
                  onClick={() => setSelectedSection(section)}
                >
                  <div className="flex items-center">
                    <div className={'flex w-full items-center shrink-0'}>
                      <IconComponent
                        className={`${
                          isSectionSelected
                            ? 'h-10 w-10 fill-white'
                            : 'h-6 w-6 fill-gray-200 hover:fill-white'
                        }`}
                      />
                      <div className="flex bg-gray-200 w-full h-0.5 " />
                    </div>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-semibold text-gray-900">
                      {t(`chapter2.${section}`)}
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                      {t(`chapter2.${section}`)}
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
