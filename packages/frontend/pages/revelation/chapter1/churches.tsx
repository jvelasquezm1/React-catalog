import React, { memo } from 'react';
import {
  ChurchesIdentifiers,
  Identifiers,
} from '../../../public/shared/identifiers';
import {
  Ephesus,
  Smyrna,
  Pergamum,
  Thyatira,
  Sardis,
  Philadelphia,
  Laodicea,
} from '../../../public/assets';
import { TFunction } from 'i18next';
import HorizontalScrollable from '../../../components/horizontalScrollable';

interface ChurchesProps {
  setIdentifier: (identifier: Identifiers) => void;
  t: TFunction<'translation', undefined>;
  identifierSelected: ChurchesIdentifiers;
}

const ChurchesImages = [
  Ephesus,
  Smyrna,
  Pergamum,
  Thyatira,
  Sardis,
  Philadelphia,
  Laodicea,
];

const Churches: React.FC<ChurchesProps> = ({
  setIdentifier,
  t,
  identifierSelected,
}) => {
  return (
    <HorizontalScrollable
      setIdentifier={setIdentifier}
      t={t}
      identifierSelected={identifierSelected}
      identifiers={Object.values(ChurchesIdentifiers)}
      images={ChurchesImages}
      titlePrefix="revelationLetters"
      hideButtons
    />
  );
};

export default memo(Churches);
