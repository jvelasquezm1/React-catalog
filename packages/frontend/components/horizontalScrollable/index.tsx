import Image, { StaticImageData } from 'next/image';
import React, { memo, useRef, useState } from 'react';
import { DownArrow, UpArrow } from '../../public/assets';
import { TFunction } from 'i18next';
import { useOutsideHover } from '../../libs/hooks';
import { Identifiers } from '../../public/shared/identifiers';

export interface HorizontalScrollableProps<T> {
  setIdentifier: (identifier: T) => void;
  t: TFunction<'translation', undefined>;
  identifierSelected: T;
  identifiers: T[];
  images: StaticImageData[];
  titlePrefix: string;
  hideButtons?: boolean;
}

const HorizontalScrollable = <T extends Identifiers>({
  setIdentifier,
  t,
  identifierSelected,
  identifiers,
  images,
  titlePrefix,
  hideButtons = false,
}: HorizontalScrollableProps<T>) => {
  const [hoveredIdentifier, setHoveredIdentifier] = useState<T | null>(null);
  const ContainerRef = useRef<HTMLDivElement | null>(null);

  useOutsideHover({
    ref: ContainerRef,
    callback: setHoveredIdentifier,
    value: null,
  });

  const scrollLeft = () => {
    if (ContainerRef.current) {
      ContainerRef.current.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (ContainerRef.current) {
      ContainerRef.current.scrollTo({
        left: ContainerRef.current.scrollWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex items-center space-x-4">
        {!hideButtons && (
          <button
            onClick={() => scrollLeft()}
            className="border-2 rounded-full text-center p-2"
          >
            <UpArrow className="h-6 w-6" />
          </button>
        )}
        <div
          ref={ContainerRef}
          className="flex flex-row overflow-auto items-center space-x-4 w-full gap-8"
        >
          {identifiers.map((identifier, index) => (
            <div key={index} className="flex flex-col items-center space-x-4">
              <div className="relative">
                {[identifierSelected, hoveredIdentifier].includes(
                  identifier
                ) && (
                  <button
                    onClick={() => setIdentifier(identifier)}
                    className="border-4 border-blue-600 w-28 h-28 absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-full"
                  >
                    <span className="text-xs">
                      {t(`${titlePrefix}.${identifier}.title`)}
                    </span>
                  </button>
                )}
                <Image
                  src={images[index]}
                  alt={`${identifier}`}
                  className="w-28 h-28 rounded-full cursor-pointer"
                  onMouseMove={() => setHoveredIdentifier(identifier)}
                />
              </div>
            </div>
          ))}
        </div>
        {!hideButtons && (
          <button
            onClick={() => scrollRight()}
            className="border-2 rounded-full text-center p-2"
          >
            <DownArrow className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default memo(HorizontalScrollable);
