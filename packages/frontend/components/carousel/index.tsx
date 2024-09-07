import React, { memo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { imageSources } from './imageSource';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

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
      <div
        className={`cursor-pointer bg-opacity-95 border shadow-lg rounded-lg p-4 md:p-8 ${
          isCurrentSlide ? 'bg-white' : 'bg-gray-100'
        }`}
        style={{ transition: 'transform 0.5s' }}
      >
        <Image
          className={`rounded-3xl mx-auto ${
            isCurrentSlide && 'hover:scale-110 transition-transform'
          }`}
          style={{ objectFit: 'cover' }}
          width="250"
          height="250"
          src={imageSources[book][index]}
          alt={index.toString()}
        />
        {isCurrentSlide && (
          <div className="text-center mt-4 md:mt-8 flex flex-col space-y-2 md:space-y-5">
            <p className="text-base md:text-lg border-b pb-2 md:pb-4">
              {t(`${book}Book.chapter${index + 1}.title`)}
            </p>
            <p className="text-sm md:text-base">{`${t('chapter')} ${
              titles ? titles[index] : index + 1
            }`}</p>
          </div>
        )}
      </div>
    );

    if (isCurrentSlide) {
      return {
        ...slide_,
        onClick: () => router.push(`/${book}/chapter${index + 1}`),
        content,
      };
    } else {
      return { ...slide_, onClick: () => setSlide(index), content };
    }
  });

  return (
    <div className="h-full m-auto w-[90%] md:w-[40rem] mt-4 mb-4">
      <SpringCarouselCard
        slides={slides}
        offsetRadius={2}
        showNavigation={false}
        goToSlide={slide}
      />
      <div className="flex justify-center items-center mt-32 space-x-4">
        <FaArrowCircleLeft
          className="cursor-pointer text-xl text-blue-900"
          onClick={() => setSlide((slide - 1 + length) % length)}
        />
        <FaArrowCircleRight
          className="cursor-pointer text-xl text-blue-900"
          onClick={() => setSlide((slide + 1) % length)}
        />
      </div>
    </div>
  );
};

export default memo(Carousel);
