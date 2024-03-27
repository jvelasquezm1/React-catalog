import Image from 'next/image';
import React, { memo } from 'react';
import { StatueIdentifiers } from '../../public/shared/identifiers';
import { Bear, Beast, Horn, Leopard, Lion } from '../../public/assets';
import { TFunction } from 'i18next';
import { omit } from 'lodash';

interface BeastsProps {
  setIdentifier: (identifier: StatueIdentifiers) => void;
  t: TFunction<'translation', undefined>;
  identifierSelected: StatueIdentifiers;
}

const BeastsImages = {
  [StatueIdentifiers.Babylon]: Lion,
  [StatueIdentifiers.MedoPersia]: Bear,
  [StatueIdentifiers.Greece]: Leopard,
  [StatueIdentifiers.Rome]: Beast,
  [StatueIdentifiers.DividedKingdom]: Horn,
};

const Beasts: React.FC<BeastsProps> = ({
  setIdentifier,
  t,
  identifierSelected,
}) => {
  return (
    <div className="flex p-4">
      <div className="flex w-96 flex-col">
        {Object.values(omit(StatueIdentifiers, 'HeavenKingdom')).map(
          (identifier) => (
            <div key={identifier} className="flex items-center h-36">
              <button
                className={`border-b border-l h-12 ${
                  identifier === identifierSelected && 'bg-gray-800'
                } rounded-lg w-44 hover:bg-gray-600 z-10`}
                onClick={() => setIdentifier(identifier)}
              >
                <span>
                  {t(`danielBook.propheticChapter.${identifier}.title`)}
                </span>
              </button>
              <div className="flex mt-auto w-32 h-[50%] border-t-2 " />
              <div className="flex items-center pt-8">
                <Image
                  src={BeastsImages[identifier]}
                  alt={identifier}
                  className="w-36 rounded-full mb-8"
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default memo(Beasts);
