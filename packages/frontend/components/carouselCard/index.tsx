import React, { memo, useState } from 'react';
import Carousel from '../carousel';

interface CarouselCardProps {
  title: string;
  description: string;
  book: 'revelation' | 'daniel';
  numberOfChapters: number;
  titles?: string[];
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  description,
  book,
  numberOfChapters,
  titles,
}) => {
  const [slide, setSlide] = useState(0);

  return (
    <div className="flex mt-24">
      <div className="w-[40%] m-auto space-y-12">
        <span className="text-5xl font-bold">{title}</span>
        <span className="block text-justify">{description}</span>
      </div>
      <div className="w-[50%]">
        <Carousel
          setSlide={setSlide}
          slide={slide}
          book={book}
          length={numberOfChapters}
          titles={titles}
        />
      </div>
    </div>
  );
};

export default memo(CarouselCard);