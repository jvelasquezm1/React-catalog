import React, { memo } from 'react';

import Link from 'next/link';

interface CardProps {
  link: string;
  description: string;
  title: string;
  buttonTitle: string;
}

const Card: React.FC<CardProps> = ({
  link,
  title,
  description,
  buttonTitle,
}) => {
  return (
    <div className="shadow-lg bg-slate-500 m-28 bg-opacity-40 rounded-lg p-4 space-y-8">
      <span className="text-5xl font-bold ">{title}</span>
      <span className="block text-justify">{description}</span>
      <Link
        href={link}
        className="block mt-8 w-32 text-center bg-blue-500 hover:bg-blue-400 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        {buttonTitle}
      </Link>
    </div>
  );
};

export default memo(Card);
