import Link from 'next/link';
import { Book, DownArrow, RightArrow } from '../../public/assets';
import React, { memo } from 'react';
import { TFunction } from 'i18next';

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
  t: TFunction<'translation', undefined>;
}

const SideMenuItem: React.FC<SideMenuItemProps> = ({
  label,
  onClick,
  isOpen,
  chapters,
  basePath,
  route,
  className,
  t,
}) => {
  return (
    <div className={className}>
      <button
        className={`pl-4 pr-4 p-2 block w-full text-left font-semibold ${
          route.includes(basePath) && 'bg-slate-900'
        } hover:bg-slate-900 cursor-pointer flex`}
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
      {isOpen && (
        <>
          <Link
            className={`block p-2 pl-6 w-full text-sm ${
              route === `${basePath}` && 'bg-slate-900'
            } hover:bg-slate-900`}
            href={`${basePath}`}
          >
            {`${t('home')}`}
          </Link>
          {chapters.map((chapter, index) => (
            <Link
              key={index}
              className={`block p-2 pl-8 w-full text-sm ${
                route === `${basePath}/chapter${index + 1}` && 'bg-slate-900'
              } hover:bg-slate-900`}
              href={`${basePath}/chapter${index + 1}`}
            >
              {chapter ? t(chapter) : `${t('chapter')} ${index + 1}`}
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default memo(SideMenuItem);
