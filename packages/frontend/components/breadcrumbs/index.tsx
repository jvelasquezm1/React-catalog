import React, { memo } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { TFunction } from 'i18next';
import { RevelationChapters } from '../sideMenuItem';

const Breadcrumbs = ({ t }: { t: TFunction<'translation', undefined> }) => {
  const router = useRouter();

  const getPathSegments = () => {
    const pathSegments = router.asPath.split('/');

    let currentPath = '';
    return pathSegments.map((segment) => {
      segment = segment.includes('chapter')
        ? router.pathname.includes('daniel')
          ? `${t('chapter')} ${segment.split('chapter')[1]}`
          : Object.values(RevelationChapters)[+segment.split('chapter')[1] - 1]
        : segment;

      currentPath += currentPath === '/' ? segment : `/${segment}`;

      return {
        label: segment,
        path: currentPath,
      };
    });
  };

  const segments = getPathSegments();

  return (
    <div className="ml-4 mt-2">
      <Link
        href="/"
        className="text-white hover:text-gray-50 hover:font-semibold"
      >
        {t('home')}
      </Link>
      {segments.map((segment, index) => {
        return (
          <span key={index}>
            {segment.label && (
              <Link
                href={segment.path}
                className="text-white hover:text-gray-50 hover:font-semibold"
              >
                {` > ${t(segment.label)}`}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default memo(Breadcrumbs);
