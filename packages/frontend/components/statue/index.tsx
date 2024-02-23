import Image from 'next/image';
import React, { memo } from 'react';
import { StatueIdentifiers } from '../../public/shared/identifiers';
import {
  Belly,
  Chest,
  Feet,
  Hand,
  Head,
  Knees,
  StatueImage,
} from '../../public/assets';

interface StatueProps {
  setIdentifier: (identifier: StatueIdentifiers) => void;
}

const Statue: React.FC<StatueProps> = ({ setIdentifier }) => {
  return (
    <div className="mt-8 flex-[0.35]">
      <Image
        className={'cursor-pointer w-[500px] h-[700px]'}
        src={StatueImage}
        alt={'statue'}
      />
      <Image
        className={
          'body-statue w-[120px] opacity-0 transition-opacity duration-500 absolute top-0 translate-x-[143%] translate-y-[45%] cursor-pointer'
        }
        src={Head}
        alt={'head'}
        onClick={() => setIdentifier(StatueIdentifiers.Babylon)}
      />
      <div
        className="image-container"
        onClick={() => setIdentifier(StatueIdentifiers.MedoPersia)}
      >
        <Image
          className={
            'body-chest  opacity-0 w-[400px] transition-opacity duration-500 absolute top-0 translate-x-[23%] translate-y-[120%] cursor-pointer'
          }
          src={Chest}
          alt={'chest'}
        />

        <Image
          className={
            'body-hand opacity-0 w-[110px] transition-opacity duration-500 absolute top-0 translate-x-[63%] translate-y-[234%] cursor-pointer'
          }
          src={Hand}
          alt={'hand'}
        />
      </div>

      <Image
        className={
          'body-statue opacity-0 w-[140px] transition-opacity duration-500 absolute top-0 translate-x-[132%] translate-y-[240%] cursor-pointer'
        }
        src={Belly}
        alt={'belly'}
        onClick={() => setIdentifier(StatueIdentifiers.Greece)}
      />

      <Image
        className={
          'body-statue opacity-0 w-[180px] transition-opacity duration-500 absolute top-0 translate-x-[92%] translate-y-[273%] cursor-pointer'
        }
        src={Knees}
        alt={'knees'}
        onClick={() => setIdentifier(StatueIdentifiers.Rome)}
      />

      <Image
        className={
          'body-statue opacity-0 w-[230px] transition-opacity duration-500 absolute top-0 translate-x-[63%] translate-y-[662%] cursor-pointer'
        }
        src={Feet}
        alt={'feet'}
        onClick={() => setIdentifier(StatueIdentifiers.DividedRome)}
      />
    </div>
  );
};

export default memo(Statue);
