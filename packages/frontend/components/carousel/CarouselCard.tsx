import React, { memo } from 'react';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';

type CarouselCardProps = {
  setSlide: (index: number) => void;
  slide: number;
  book: 'revelation' | 'daniel';
  length: number;
  titles?: string[];
};

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

const CarouselCard: React.FC<CarouselCardProps> = ({
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
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const chapterImage = require(`../../public/assets/chapters/${book}/c${
      index + 1
    }.jpeg`);
    const content = (
      <div className="cursor-pointer">
        <Image
          className={`rounded-3xl h-60 w-60 ${
            isCurrentSlide && 'hover:scale-110 transition-transform'
          }`}
          style={{ objectFit: 'cover' }}
          src={chapterImage}
          alt={index.toString()}
        />
        {isCurrentSlide && (
          <p className="text-center mt-4 text-white">
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
    <SpringCarouselCard
      slides={slides}
      offsetRadius={5}
      showNavigation={false}
      goToSlide={slide}
    />
  );
};

export default memo(CarouselCard);
