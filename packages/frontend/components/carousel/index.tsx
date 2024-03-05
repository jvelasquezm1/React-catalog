import React, { memo } from 'react';

import CarouselCard from './CarouselCard';

type CarouselProps = {
  setSlide: (index: number) => void;
  slide: number;
  book: 'revelation' | 'daniel';
  length: number;
  titles?: string[];
  title: string;
};

const Carousel: React.FC<CarouselProps> = ({
  slide,
  setSlide,
  book,
  length,
  titles,
  title,
}) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-center uppercase self-center text-xl text-white w-full bg-slate-800 p-8 font-serif">
        {title}
      </h2>
      <div className="bg-slate-700">
        <div className="h-72 m-auto w-[40rem] mt-4 mb-4">
          <CarouselCard
            setSlide={setSlide}
            slide={slide}
            book={book}
            length={length}
            titles={titles}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Carousel);
