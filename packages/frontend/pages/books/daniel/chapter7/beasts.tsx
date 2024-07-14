import React, { memo } from 'react';
import {
  Identifiers,
  StatueIdentifiers,
} from '../../../../public/shared/identifiers';
import { Bear, Beast, Horn, Leopard, Lion } from '../../../../public/assets';
import { TFunction } from 'i18next';
import { omit } from 'lodash';
import HorizontalScrollable from '../../../../components/horizontalScrollable';

interface BeastsProps {
  setIdentifier: (identifier: Identifiers) => void;
  t: TFunction<'translation', undefined>;
  identifierSelected: StatueIdentifiers;
}

const BeastsImages = [Lion, Bear, Leopard, Beast, Horn];

const Beasts: React.FC<BeastsProps> = ({
  setIdentifier,
  t,
  identifierSelected,
}) => {
  return (
    <HorizontalScrollable
      setIdentifier={setIdentifier}
      t={t}
      identifierSelected={identifierSelected}
      identifiers={Object.values(omit(StatueIdentifiers, 'HeavenKingdom'))}
      images={BeastsImages}
      titlePrefix="danielBook.propheticChapter"
      hideButtons
    />
  );
};

export default memo(Beasts);
