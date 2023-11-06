import React, { memo, useState } from 'react';
import Carousel from 'react-spring-3d-carousel';

import { useRouter } from 'next/navigation';

import Image from 'next/image';

const Home = () => {
  const [slide, goToSlide] = useState(0);
  const router = useRouter();

  const slides = Array.from({ length: 12 }, (_, index) => ({
    key: (index + 1).toString(),
  })).map((slide_, index) => {
    const isCurrentSlide = slide === index;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const chapterImage = require(`../../public/assets/chapters/c${
      index + 1
    }.jpeg`);
    const content = (
      <div className="w-60 h-60 cursor-pointer">
        <Image
          className={`rounded-3xl h-full w-full${
            isCurrentSlide ? 'hover:scale-110 transition-transform ' : ''
          }`}
          style={{ objectFit: 'cover' }}
          src={chapterImage}
          alt={index.toString()}
        />
        {isCurrentSlide && (
          <p className="text-white text-center mt-4">Capitulo {index + 1}</p>
        )}
      </div>
    );

    if (isCurrentSlide) {
      return {
        ...slide_,
        onClick: () => router.push(`/chapters/chapter${index + 1}`),
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
