import Image from 'next/image';
import React, { memo } from 'react';
import StatueImage from '../../public/assets/statue.png';
import Head from '../../public/assets/head.png';
import Chest from '../../public/assets/chest.png';
import Hand from '../../public/assets/hand.png';
import Belly from '../../public/assets/belly.png';
import Knees from '../../public/assets/knees.png';
import Feet from '../../public/assets/feet.png';
import { StatueIdentifiers } from '../../public/shared/identifiers';

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
          'body-statue w-[120px] opacity-0 transition-opacity duration-500 left-[17.5%] absolute top-0 transform translate-x-[-60%] translate-y-[15%] cursor-pointer'
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
            'body-chest  opacity-0 w-[400px] transition-opacity duration-500 left-[17.5%] absolute top-0 transform translate-x-[-40%] translate-y-[80%] cursor-pointer'
          }
          src={Chest}
          alt={'chest'}
        />

        <Image
          className={
            'body-hand opacity-0 w-[110px] transition-opacity duration-500 left-[17.5%] absolute top-0 transform translate-x-[-174%] translate-y-[204%] cursor-pointer'
          }
          src={Hand}
          alt={'hand'}
        />
      </div>

      <Image
        className={
          'body-statue opacity-0 w-[140px] transition-opacity duration-500 left-[17.5%] absolute top-0 transform translate-x-[-47%] translate-y-[210%] cursor-pointer'
        }
        src={Belly}
        alt={'belly'}
        onClick={() => setIdentifier(StatueIdentifiers.Greece)}
      />

      <Image
        className={
          'body-statue opacity-0 w-[180px] transition-opacity duration-500 left-[17.5%] absolute top-0 transform translate-x-[-48%] translate-y-[243%] cursor-pointer'
        }
        src={Knees}
        alt={'knees'}
        onClick={() => setIdentifier(StatueIdentifiers.Rome)}
      />

      <Image
        className={
          'body-statue opacity-0 w-[230px] transition-opacity duration-500 left-[17.5%] absolute top-0 transform translate-x-[-45%] translate-y-[602%] cursor-pointer'
        }
        src={Feet}
        alt={'feet'}
        onClick={() => setIdentifier(StatueIdentifiers.DividedRome)}
      />
    </div>
  );
};

export default memo(Statue);
