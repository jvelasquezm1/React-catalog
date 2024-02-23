import Image, { StaticImageData } from 'next/image';
import React, { memo } from 'react';

interface HorizontalCardProps {
  title: string;
  description: string;
  imageSrc?: StaticImageData;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="flex border-gray-200 rounded-lg shadow flex-row items-center">
      {imageSrc && (
        <Image
          className="m-4 object-cover rounded-lg w-72"
          src={imageSrc}
          alt={title}
        />
      )}
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default memo(HorizontalCard);
