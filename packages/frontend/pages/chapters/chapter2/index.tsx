import Image from 'next/image';
import React, { memo } from 'react';
import Statue from '../../../public/assets/statue.png';
import Head from '../../../public/assets/head.png';
import Chest from '../../../public/assets/chest.png';
import Hand from '../../../public/assets/hand.png';
import Belly from '../../../public/assets/belly.png';
import Knees from '../../../public/assets/knees.png';
import Feet from '../../../public/assets/feet.png';

const Chapter2 = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        className={'w-[500px] h-[700px] m-auto mt-2'}
        src={Statue}
        alt={'statue'}
      />
      <Image
        className={
          'body-statue w-[120px] opacity-0 transition-opacity duration-500 left-[50%] absolute top-0 transform translate-x-[-60%] translate-y-[5%]'
        }
        src={Head}
        alt={'head'}
      />
      <div className="image-container">
        <Image
          className={
            'body-chest  opacity-0 w-[400px] transition-opacity duration-500 left-[50%] absolute top-0 transform translate-x-[-38%] translate-y-[70%]'
          }
          src={Chest}
          alt={'chest'}
        />

        <Image
          className={
            'body-hand opacity-0 w-[110px] transition-opacity duration-500 left-[50%] absolute top-0 transform translate-x-[-168%] translate-y-[192%]'
          }
          src={Hand}
          alt={'hand'}
        />
      </div>

      <Image
        className={
          'body-statue opacity-0 w-[140px] transition-opacity duration-500 left-[50%] absolute top-0 transform translate-x-[-45%] translate-y-[190%]'
        }
        src={Belly}
        alt={'belly'}
      />

      <Image
        className={
          'body-statue opacity-0 w-[180px] transition-opacity duration-500 left-[50%] absolute top-0 transform translate-x-[-44%] translate-y-[223%]'
        }
        src={Knees}
        alt={'knees'}
      />

      <Image
        className={
          'body-statue opacity-0 w-[230px] transition-opacity duration-500 left-[50%] absolute top-0 transform translate-x-[-43%] translate-y-[582%]'
        }
        src={Feet}
        alt={'feet'}
      />
    </div>
  );
};

export default memo(Chapter2);
