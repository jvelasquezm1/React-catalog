import React, { memo, useState } from 'react';
import Carousel from 'react-spring-3d-carousel';

import { useRouter } from 'next/navigation';

import Statue from '../../public/assets/Cap2.png';
import Image from 'next/image';

const Home = () => {
  const [slide, goToSlide] = useState(0);
  const router = useRouter();

  const slides = Array.from({ length: 12 }, (_, index) => ({
    key: (index + 1).toString(),
  })).map((slide_, index) => {
    const isCurrentSlide = slide === index;
    const content = (
      <Image
        className={`w-80 h-96 rounded-l-3xl  ${
          isCurrentSlide
            ? 'hover:scale-110 transition-transform cursor-pointer'
            : ''
        }`}
        src={Statue}
        alt={index.toString()}
      />
    );

    if (isCurrentSlide) {
      return {
        ...slide_,
        // To change for desired chapter
        onClick: () => router.push('/chapters/chapter2'),
        content,
      };
    } else {
      return { ...slide_, onClick: () => goToSlide(index), content };
    }
  });

  return (
    <div className="h-screen flex bg-black">
      <h2 className="uppercase self-center ml-4 text-white">
        El libro de Daniel
      </h2>
      <div className="w-[80%] h-full m-auto">
        <Carousel
          slides={slides}
          offsetRadius={5}
          showNavigation={false}
          goToSlide={slide}
        />
      </div>
    </div>
  );
};

export default memo(Home);
