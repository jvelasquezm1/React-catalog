import React, { memo } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Chapter8 = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h2 className="mb-3 text-3xl font-extrabold text-center pb-4 border-b">
        {t('danielBook.chapter8.title')}
      </h2>

      <div className="flex">
        <div className="relative h-16">
          <button
            onClick={() => console.log('')}
            className="z-20 border-2 h-16 w-16 absolute inset-0 flex items-center justify-center text-white bg-black rounded-full"
          >
            <span>457 AC</span>
          </button>
        </div>
        <div className="border-t-2 border-white w-52 translate-y-[50%]" />
        <div className="relative">
          <button
            onClick={() => console.log('')}
            className="z-20 border-2 h-16 w-16 absolute inset-0 flex items-center justify-center text-white bg-black rounded-full"
          >
            <span>408 AC</span>
          </button>
        </div>
        <div className="border-t-2 border-white w-52 translate-y-[50%]" />
        <div className="relative">
          <button
            onClick={() => console.log('')}
            className="z-20 border-2 h-16 w-16 absolute inset-0 flex items-center justify-center text-white bg-black rounded-full"
          >
            <span>27 DC</span>
          </button>
        </div>
        <div className="border-t-2 border-white w-52 translate-y-[50%]" />
        <div className="relative">
          <button
            onClick={() => console.log('')}
            className="z-20 border-2 h-16 w-16 absolute inset-0 flex items-center justify-center text-white bg-black rounded-full"
          >
            <span>31 DC</span>
          </button>
        </div>
        <div className="border-t-2 border-white w-52 translate-y-[50%]" />
        <div className="relative">
          <button
            onClick={() => console.log('')}
            className="z-20 border-2 h-16 w-16 absolute inset-0 flex items-center justify-center text-white bg-black rounded-full"
          >
            <span>34 DC</span>
          </button>
        </div>
        <div className="border-t-2 border-white w-52 translate-y-[50%]" />
        <div className="relative">
          <button
            onClick={() => console.log('')}
            className="z-20 border-2 h-16 w-16 absolute inset-0 flex items-center justify-center text-white bg-black rounded-full"
          >
            <span>1844 DC</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Chapter8);
