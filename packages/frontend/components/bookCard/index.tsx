import React, { memo } from 'react';

import Link from 'next/link';

interface CardProps {
  link: string;
  description: string;
  title: string;
  buttonTitle: string;
}

const BookCard: React.FC<CardProps> = ({
  link,
  title,
  description,
  buttonTitle,
}) => {
  return (
    <div className="container">
      <div className="m-auto rounded-lg p-4 overflow-auto h-96">
        <p className="p-8 text-5xl font-bold">{title}</p>
        <p className="block text-justify text-base border-t p-8">
          {description}
        </p>
      </div>
      <Link
        href={link}
        className="m-auto block mt-8 w-32 text-center font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        {buttonTitle}
      </Link>
    </div>
  );
};

export default memo(BookCard);
