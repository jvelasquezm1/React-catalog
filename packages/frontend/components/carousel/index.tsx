import React, { memo } from 'react';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { imageSources } from './imageSource';

type SpringCarouselCardProps = {
  slides: Array<{ onClick: () => void; content: JSX.Element; key: string }>;
  offsetRadius: number;
  showNavigation: boolean;
  goToSlide: number;
};

const SpringCarouselCard = dynamic<SpringCarouselCardProps>(
  () => import('react-spring-3d-carousel') as never,
  {
    ssr: false,
  }
);

type CarouselProps = {
  setSlide: (index: number) => void;
  slide: number;
  book: 'revelation' | 'daniel';
  length: number;
  titles?: string[];
};

const Carousel: React.FC<CarouselProps> = ({
  slide,
  setSlide,
  book,
  length,
  titles,
}) => {
  const { t } = useTranslation();
  const router = useRouter();

  const slides = Array.from({ length }, (_, index) => ({
    key: (index + 1).toString(),
  })).map((slide_, index) => {
    const isCurrentSlide = slide === index;
    const content = (
      <div className="cursor-pointer">
        <Image
          className={`rounded-3xl h-60 w-60 ${
            isCurrentSlide && 'hover:scale-110 transition-transform'
          }`}
          style={{ objectFit: 'cover' }}
          width="200"
          height="200"
          src={imageSources[book][index]}
          alt={index.toString()}
        />
        {isCurrentSlide && (
          <p className="text-center mt-4">
            {`${t('chapter')} ${titles ? titles[index] : index + 1}`}
          </p>
        )}
      </div>
    );

    if (isCurrentSlide) {
      return {
        ...slide_,
        onClick: () => router.push(`/books/${book}/chapter${index + 1}`),
        content,
      };
    } else {
      return { ...slide_, onClick: () => setSlide(index), content };
    }
  });

  return (
    <div className="h-72 m-auto w-[40rem] mt-4 mb-4">
      <SpringCarouselCard
        slides={slides}
        offsetRadius={5}
        showNavigation={false}
        goToSlide={slide}
      />
    </div>
  );
};

export default memo(Carousel);
