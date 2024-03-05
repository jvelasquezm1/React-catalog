import Link from 'next/link';
import { Book, DownArrow, RightArrow } from '../../public/assets';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

export enum RevelationChapters {
  Letters = 'letters',
  Seals = 'seals',
  Trumpets = 'trumpets',
  WomanAndDragon = 'womanAndDragon',
  Bowls = 'bowls',
  GreatHarlot = 'greatHarlot',
  FinalTriumph = 'finalTriumph',
}

interface SideMenuItemProps {
  label: string;
  onClick: () => void;
  isOpen: boolean;
  chapters: (RevelationChapters | string)[];
  basePath: string;
  route: string;
  className?: string;
}

const SideMenuItem: React.FC<SideMenuItemProps> = ({
  label,
  onClick,
  isOpen,
  chapters,
  basePath,
  route,
  className,
}) => {
  const { t } = useTranslation();
  return (
    <div className={className}>
      <button
        className={`pl-4 pr-4 p-2 block w-full text-left font-semibold text-white ${
          route.includes(basePath) && 'text-white bg-black'
        } hover:text-white hover:bg-black cursor-pointer flex`}
        onClick={onClick}
      >
        <Book className="stroke-white h-6 w-6 fill-white mr-4" />
        {label}
        {isOpen ? (
          <DownArrow className="stroke-white h-6 w-6 fill-white ml-auto" />
        ) : (
          <RightArrow className="stroke-white h-6 w-6 fill-white ml-auto" />
        )}
      </button>
      {isOpen &&
        chapters.map((chapter, index) => (
          <Link
            key={index}
            className={`block p-2 pl-6 w-full text-gray-400 text-sm ${
              route === `${basePath}/chapter${index + 1}` &&
              'text-white bg-black'
            } hover:text-white hover:bg-black`}
            href={`${basePath}/chapter${index + 1}`}
          >
            {chapter ? t(chapter) : `${t('chapter')} ${index + 1}`}
          </Link>
        ))}
    </div>
  );
};

export default memo(SideMenuItem);
