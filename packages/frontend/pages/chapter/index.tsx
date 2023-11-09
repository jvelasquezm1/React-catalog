import React, { memo } from 'react';
import { useQuery } from '@apollo/client';

import { GET_CHAPTERS } from '../../graphql/modules/chapters';
import Statue from '../../components/statue';
import Card from '../../components/card';
import { Chapter } from '../../types/schema';

const Chapter = () => {
  const { data } = useQuery(GET_CHAPTERS);
  return (
    <div className="flex bg-white h-screen text-black">
      <Statue />
      {data &&
        data.Chapters.map((chapter: Chapter) => {
          return chapter.identifier === 'BA' ? (
            <div className="m-4 flex flex-col flex-[0.65]">
              <Card title={chapter.title} description={chapter.description} />
              <div className="mt-auto mb-16">timeline</div>
            </div>
          ) : null;
        })}
    </div>
  );
};

export default memo(Chapter);
