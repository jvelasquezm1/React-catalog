import React, { memo } from 'react';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import dynamic from 'next/dynamic';

type CarouselProps = {
  setSlide: (index: number) => void;
  slide: number;
  book: 'revelation' | 'daniel';
  length: number;
  titles?: string[];
};

type SpringCarouselProps = {
  slides: Array<{ onClick: () => void; content: JSX.Element; key: string }>;
  offsetRadius: number;
  showNavigation: boolean;
  goToSlide: number;
};

const SpringCarousel = dynamic<SpringCarouselProps>(
  () => import('react-spring-3d-carousel') as never,
  {
    ssr: false,
  }
);

const $Carousel: React.FC<CarouselProps> = ({
  slide,
  setSlide,
  book,
  length,
  titles,
}) => {
  const router = useRouter();

  const slides = Array.from({ length }, (_, index) => ({
    key: (index + 1).toString(),
  })).map((slide_, index) => {
    const isCurrentSlide = slide === index;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const chapterImage = require(`../../public/assets/chapters/${book}/c${
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
          <p className="text-center mt-4">
            Capitulo {titles ? titles[index] : index + 1}
          </p>
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
      return { ...slide_, onClick: () => setSlide(index), content };
    }
  });

  return (
    <SpringCarousel
      slides={slides}
      offsetRadius={5}
      showNavigation={false}
      goToSlide={slide}
    />
  );
};

export const Carousel = memo($Carousel);
