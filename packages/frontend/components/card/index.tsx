import React, { memo } from 'react';

interface CardProps {
  title: string;
  description: string;
  image?: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div
      className="shadow static left-0 top-0 z-[1055] block w-full overflow-y-auto overflow-x-hidden outline-none"
      tabIndex={-1}
    >
      <div>
        <div className="text-center border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
          <h5>{title}</h5>
        </div>
        <div className="relative flex-auto p-4">{description}</div>
        {image && <div>{image}</div>}
      </div>
    </div>
  );
};

export default memo(Card);
