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
      <div className="flex flex-col justify-between p-4">
        <h5 className="mb-2 text-lg font-bold">{title}</h5>
        <p className="mb-3">{description}</p>
      </div>
    </div>
  );
};

export default memo(HorizontalCard);
