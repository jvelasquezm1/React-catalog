import React, { memo, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_CHAPTERS } from '../../../graphql/modules/chapters';
import Statue from '../../../components/statue';
import Card from '../../../components/card';
import { Chapter } from '../../../types/schema';
import { StatueIdentifiers } from '../../../public/shared/identifiers';
import { CalendarIcon } from '../../../public/assets';

const Chapter2 = () => {
  const { data } = useQuery(GET_CHAPTERS);
  const [identifier, setIdentifier] = useState(StatueIdentifiers.Babylon);
  const [selectedChapter, setSelectedChapter] = useState<Chapter>();

  useEffect(() => {
    const chapter = data?.Chapters.find(
      (chapter: Chapter) => chapter.identifier === identifier
    );
    setSelectedChapter(chapter);
  }, [data?.Chapters, identifier]);

  return (
    <div className="flex">
      <Statue setIdentifier={setIdentifier} />
      {selectedChapter && (
        <div key={selectedChapter.id} className="m-4 flex flex-col flex-[0.65]">
          <Card
            title={selectedChapter.title}
            description={selectedChapter.description}
          />
          <div className="mt-auto mb-16">
            <ol className="items-center flex justify-between">
              {data?.Chapters.map((chapter: Chapter) => (
                <li key={chapter.id} className="relative mb-6 mr-4">
                  <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center shrink-0">
                      <CalendarIcon />
                    </div>
                    <div className="flex w-full bg-gray-200 h-0.5 "></div>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-semibold text-gray-900">
                      {chapter.title}
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                      {/* TODO: Add years to DB */}
                      1539 AC - 1300 AC
                    </time>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Chapter2);
