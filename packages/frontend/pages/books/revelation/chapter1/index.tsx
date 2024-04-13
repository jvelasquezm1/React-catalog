import React, { memo, useState } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Churches from './churches';
import {
  ChurchesIdentifiers,
  Identifiers,
} from '../../../../public/shared/identifiers';
import { Paper } from '../../../../public/assets';
import Image from 'next/image';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Chapter1 = () => {
  const { t } = useTranslation();
  const [identifier, setIdentifier] = useState(ChurchesIdentifiers.Ephesus);
  const handleSetIdentifier = (newIdentifier: Identifiers) => {
    setIdentifier(newIdentifier as ChurchesIdentifiers);
  };

  return (
    <div className="p-4">
      <h2 className="mb-3 text-3xl font-extrabold text-center pb-4 border-b">
        {t('letters')}
      </h2>
      <div className="flex">
        <Churches
          setIdentifier={handleSetIdentifier}
          t={t}
          identifierSelected={identifier}
        />
        <div className="m-4 relative">
          <Image src={Paper} alt={'paper'} />
          <div className="absolute top-0 text-black m-40">
            <span>
              You, O king, were watching, and behold, a great image. This image,
              which was exceedingly bright and whose glory was very impressive,
              stood before you, and its appearance was terrifying. The head of
              this image was made of fine gold. The head of gold in the vision
              of the statue in Nebuchadnezzars dream, as described in the book
              of Daniel in the Bible, symbolizes the Babylonian Empire, one of
              the most influential empires of antiquity. Gold represents purity,
              wealth, and power, reflecting the opulence and greatness of the
              Babylonian Empire. Under the reign of Nebuchadnezzar II, the
              Babylonian Empire reached its zenith in the 6th century BCE,
              ruling the Mesopotamian region with Babylon as its capital. It was
              known for its impressive architecture, especially the famous Tower
              of Babel and the Hanging Gardens of Babylon, considered one of the
              Seven Wonders of the Ancient World. Additionally, the Babylonian
              Empire was a center of advancements in mathematics, astronomy, and
              laws, such as the famous Code of Hammurabi. However, the
              Babylonian Empire is also remembered for its conquest of Jerusalem
              and the deportation of many Jews to Babylon, a significant event
              in Jewish history known as the Babylonian Exile. This period
              marked a shift in the history of Israel and had a lasting impact
              on Jewish religion and culture. In summary, the head of gold in
              the statues vision symbolizes the splendor and supremacy of the
              Babylonian Empire, which left an indelible mark on the history of
              the Near East and biblical narrative.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Chapter1);
