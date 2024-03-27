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
      <div className="cursor-pointer bg-blue-950 bg-opacity-95 border-b shadow-lg rounded-lg p-8">
        <Image
          className={`rounded-3xl h-60 w-60 m-auto ${
            isCurrentSlide && 'hover:scale-110 transition-transform'
          }`}
          style={{ objectFit: 'cover' }}
          width="200"
          height="200"
          src={imageSources[book][index]}
          alt={index.toString()}
        />
        {isCurrentSlide && (
          <div className="text-center mt-8 flex flex-col space-y-5">
            <p className="text-lg border-b pb-4">
              {t(`${book}Book.chapter${index + 1}.title`)}
            </p>
            <p>{`${t('chapter')} ${titles ? titles[index] : index + 1}`}</p>
          </div>
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
