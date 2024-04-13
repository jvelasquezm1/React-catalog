import Image, { StaticImageData } from 'next/image';
import React, { memo, useRef, useState } from 'react';
import { DownArrow, UpArrow } from '../../public/assets';
import { TFunction } from 'i18next';
import { useOutsideHover } from '../../libs/hooks';
import { Identifiers } from '../../public/shared/identifiers';

export interface VerticalScrollableProps<T> {
  setIdentifier: (identifier: T) => void;
  t: TFunction<'translation', undefined>;
  identifierSelected: T;
  identifiers: T[];
  images: StaticImageData[];
  titlePrefix: string;
}

const VerticalScrollable = <T extends Identifiers>({
  setIdentifier,
  t,
  identifierSelected,
  identifiers,
  images,
  titlePrefix,
}: VerticalScrollableProps<T>) => {
  const [hoveredIdentifier, setHoveredIdentifier] = useState<T | null>(null);
  const ContainerRef = useRef<HTMLDivElement | null>(null);

  useOutsideHover({
    ref: ContainerRef,
    callback: setHoveredIdentifier,
    value: null,
  });

  const scrollToBottom = () => {
    if (ContainerRef.current) {
      ContainerRef.current.scrollTo({
        top: ContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    if (ContainerRef.current) {
      ContainerRef.current.scrollTo({
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
        ref={ContainerRef}
        className="flex w-40 flex-col overflow-auto items-center"
      >
        {identifiers.map((identifier, index) => (
          <div key={index} className="flex items-center space-y-8">
            <div className="relative">
              {[identifierSelected, hoveredIdentifier].includes(identifier) && (
                <button
                  onClick={() => setIdentifier(identifier)}
                  className="border-2 h-36 translate-y-8 absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-full"
                >
                  <span>{t(`${titlePrefix}.${identifier}.title`)}</span>
                </button>
              )}
              <Image
                src={images[index]}
                alt={`${identifier}`}
                className="w-36 rounded-full mt-8 cursor-pointer"
                onMouseMove={() => setHoveredIdentifier(identifier)}
              />
            </div>
          </div>
        ))}
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

export default memo(VerticalScrollable);
