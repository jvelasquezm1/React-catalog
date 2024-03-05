import React, { memo, useState } from 'react';

import { Carousel } from '../components/carousel';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Home = () => {
  const [danielSlide, setDanielSlide] = useState(0);
  const [revelationsSlide, setRevelationsSlide] = useState(0);

  return (
    <>
      <div className="flex m-8">
        <h2 className="flex-[0.25] text-center self-center">
          El libro de Daniel
        </h2>
        <div className="flex-[0.5] h-72 m-auto">
          <Carousel
            setSlide={setDanielSlide}
            slide={danielSlide}
            book={'daniel'}
            length={12}
          />
        </div>
      </div>
      <div className="flex m-8">
        <h2 className="flex-[0.25] text-center self-center">
          El libro de apocalipsis
        </h2>
        <div className="flex-[0.5] h-72 m-auto">
          <Carousel
            setSlide={setRevelationsSlide}
            slide={revelationsSlide}
            book={'revelation'}
            length={7}
            titles={[
              '1 - 3',
              '4 - 7',
              '8 - 11',
              '12 - 14',
              '15 - 16',
              '17 - 20',
              '21 - 22',
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default memo(Home);
