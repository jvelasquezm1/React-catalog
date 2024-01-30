import React, { memo, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_CHAPTERS } from '../../graphql/modules/chapters';
import Statue from '../../components/statue';
import Card from '../../components/card';
import { Chapter } from '../../types/schema';
import { StatueIdentifiers } from '../../public/shared/identifiers';

const Chapter = () => {
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
    <div className="flex bg-white h-screen text-black">
      <Statue setIdentifier={setIdentifier} />
      {selectedChapter && (
        <div key={selectedChapter.id} className="m-4 flex flex-col flex-[0.65]">
          <Card
            title={selectedChapter.title}
            description={selectedChapter.description}
          />
          <div className="mt-auto mb-16">timeline</div>
        </div>
      )}
    </div>
  );
};

export default memo(Chapter);
