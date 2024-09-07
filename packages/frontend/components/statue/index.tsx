import Image from 'next/image';
import React, { memo } from 'react';
import { StatueIdentifiers } from '../../public/shared/identifiers';
import { Rock, StatueImage } from '../../public/assets';
import { TFunction } from 'i18next';

interface StatueProps {
  setIdentifier: (identifier: StatueIdentifiers) => void;
  t: TFunction<'translation', undefined>;
  identifierSelected: StatueIdentifiers;
}

const identifierToMargin = {
  [StatueIdentifiers.Babylon]: 'mt-8',
  [StatueIdentifiers.MedoPersia]: 'mt-16',
  [StatueIdentifiers.Greece]: 'mt-10',
  [StatueIdentifiers.Rome]: 'mt-6',
  [StatueIdentifiers.DividedKingdom]: 'mt-8',
  [StatueIdentifiers.HeavenKingdom]: 'mt-28',
};

const Statue: React.FC<StatueProps> = ({
  setIdentifier,
  t,
  identifierSelected,
}) => {
  return (
    <div className="mt-8 flex p-4">
      <div className="flex flex-col">
        {Object.values(StatueIdentifiers).map((identifier) => (
          <div key={identifier} className="flex">
            <button
              className={`border h-12 ${identifierToMargin[identifier]} ${
                identifier === identifierSelected && 'border-b-4 border-l-4'
              } rounded-lg w-64 hover:border-b-4 hover:border-l-4 z-10`}
              onClick={() => setIdentifier(identifier)}
            >
              <span>
                {t(`danielBook.propheticChapter.${identifier}.title`)}
              </span>
            </button>
            <div className="flex mt-auto mr-[-10rem] mb-8 w-full bg-gray-200 h-0.5 " />
          </div>
        ))}
      </div>
      <div className="w-96">
        <Image src={StatueImage} alt={'statue'} />
        <Image src={Rock} alt={'rock'} className="w-52 m-auto" />
      </div>
    </div>
  );
};

export default memo(Statue);
