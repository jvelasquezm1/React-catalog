import React, { ReactNode, memo } from 'react';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
  footer?: ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  footer,
  className,
}) => {
  return (
    <div
      className={`flex flex-col shadow rounded-md static left-0 top-0 w-full overflow-y-auto overflow-x-hidden outline-none ${className}`}
    >
      <div className="text-center border-b-2 border-neutral-100 border-opacity-100 p-4">
        <h5>{title}</h5>
      </div>
      <div className="relative flex-auto p-4">{description}</div>
      {image && <div>{image}</div>}
      {footer}
    </div>
  );
};

export default memo(Card);
