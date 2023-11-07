import React, { memo, useState } from 'react';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import dynamic from 'next/dynamic';

type CarouselProps = {
  slides: Array<{ onClick: () => void; content: JSX.Element; key: string }>;
  offsetRadius: number;
  showNavigation: boolean;
  goToSlide: number;
};

const Carousel = dynamic<CarouselProps>(
  () => import('react-spring-3d-carousel') as never,
  {
    ssr: false,
  }
);

const Home = () => {
  const [slide, goToSlide] = useState(0);
  const router = useRouter();

  const slides = Array.from({ length: 12 }, (_, index) => ({
    key: (index + 1).toString(),
  })).map((slide_, index) => {
    const isCurrentSlide = slide === index;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const chapterImage = require(`../public/assets/chapters/c${
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
          <p className="text-center mt-4">Capitulo {index + 1}</p>
        )}
      </div>
    );

    if (isCurrentSlide) {
      return {
        ...slide_,
        onClick: () => router.push('/chapter'),
        content,
      };
    } else {
      return { ...slide_, onClick: () => goToSlide(index), content };
    }
  });

  return (
    <>
      <div className="flex m-8">
        <h2 className="flex-[0.25] text-center uppercase self-center">
          El libro de Daniel
        </h2>
        <div className="flex-[0.5] h-72 m-auto">
          <Carousel
            slides={slides}
            offsetRadius={5}
            showNavigation={false}
            goToSlide={slide}
          />
        </div>
      </div>
      <div className="flex m-8">
        <h2 className="flex-[0.25] text-center uppercase self-center">
          El libro de apocalipsis
        </h2>
        <div className="flex-[0.5] h-72 m-auto">
          <Carousel
            slides={slides}
            offsetRadius={5}
            showNavigation={false}
            goToSlide={slide}
          />
        </div>
      </div>
    </>
  );
};

export default memo(Home);
