import Image from 'next/image';
import React, { memo, useRef, useState } from 'react';
import { StatueIdentifiers } from '../../public/shared/identifiers';
import {
  Bear,
  Beast,
  DownArrow,
  Horn,
  Leopard,
  Lion,
  UpArrow,
} from '../../public/assets';
import { TFunction } from 'i18next';
import { omit } from 'lodash';
import { useOutsideHover } from '../../libs/hooks';

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
  const [hoveredIdentifier, setHoveredIdentifier] =
    useState<StatueIdentifiers | null>(StatueIdentifiers.Babylon);
  const BeastRef = useRef<HTMLDivElement | null>(null);

  useOutsideHover({
    ref: BeastRef,
    callback: setHoveredIdentifier,
    value: null,
  });

  const scrollToBottom = () => {
    if (BeastRef.current) {
      BeastRef.current.scrollTo({
        top: BeastRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    if (BeastRef.current) {
      BeastRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex flex-col p-4 mt-4 h-[42.5rem]">
      <button
        onClick={() => scrollToTop()}
        className="border-2 rounded-full text-center m-auto mb-4 p-2"
      >
        <UpArrow className="stroke-white h-6 w-6 fill-white ml-auto" />
      </button>
      <div
        ref={BeastRef}
        className="flex w-40 flex-col overflow-auto items-center"
      >
        {Object.values(omit(StatueIdentifiers, 'HeavenKingdom')).map(
          (identifier) => (
            <div key={identifier} className="flex items-center space-y-8">
              <div className="relative">
                {[identifierSelected, hoveredIdentifier].includes(
                  identifier
                ) && (
                  <button
                    onClick={() => setIdentifier(identifier)}
                    className="border-2 h-36 translate-y-8 absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-full"
                  >
                    <span>
                      {t(`danielBook.propheticChapter.${identifier}.title`)}
                    </span>
                  </button>
                )}
                <Image
                  src={BeastsImages[identifier]}
                  alt={identifier}
                  className="w-36 rounded-full mt-8 cursor-pointer"
                  onMouseMove={() => setHoveredIdentifier(identifier)}
                />
              </div>
            </div>
          )
        )}
      </div>
      <button
        onClick={() => scrollToBottom()}
        className="border-2 rounded-full text-center m-auto mt-4 p-2"
      >
        <DownArrow className="stroke-white h-6 w-6 fill-white ml-auto" />
      </button>
    </div>
  );
};

export default memo(Beasts);
