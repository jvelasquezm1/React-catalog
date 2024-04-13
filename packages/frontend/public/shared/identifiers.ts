export enum StatueIdentifiers {
  Babylon = 'BA',
  MedoPersia = 'MP',
  Greece = 'GR',
  Rome = 'RO',
  DividedKingdom = 'RD',
  HeavenKingdom = 'HK',
}

export enum ChurchesIdentifiers {
  Ephesus = 'Ephesus',
  Smyrna = 'Smyrna',
  Pergamum = 'Pergamum',
  Thyatira = 'Thyatira',
  Sardis = 'Sardis',
  Philadelphia = 'Philadelphia',
  Laodicea = 'Laodicea',
}

export type Identifiers = ChurchesIdentifiers | StatueIdentifiers | string[];
