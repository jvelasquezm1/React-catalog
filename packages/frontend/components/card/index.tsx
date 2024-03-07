import React, { ReactNode, memo } from 'react';

interface CardProps {
  description: string;
  className?: string;
  footer?: ReactNode;
}

const Card: React.FC<CardProps> = ({ description, footer, className }) => {
  return (
    <div
      className={`flex flex-col shadow rounded-md static left-0 top-0 w-full overflow-y-auto overflow-x-hidden outline-none ${className}`}
    >
      <div className="relative flex-auto p-4">{description}</div>
      {footer}
    </div>
  );
};

export default memo(Card);
