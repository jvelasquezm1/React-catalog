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
    <>
      <Link href="/" className="hover:font-semibold">
        {t('home')}
      </Link>
      {segments.map((segment, index) => (
        <span key={index}>
          {index === segments.length - 1 ? (
            <span className="font-bold">{` ${index !== 0 ? '>' : ''} ${t(
              segment.label
            )}`}</span>
          ) : (
            <Link href={segment.path} className="hover:font-semibold">
              {` ${index !== 0 ? '>' : ''} ${t(segment.label)}`}
            </Link>
          )}
        </span>
      ))}
    </>
  );
};

export default memo(Breadcrumbs);
