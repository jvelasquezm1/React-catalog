import { gql } from '@apollo/client';

export const GET_CHAPTERS = gql`
  query Chapters {
    Chapters {
      id
      title
      description
      image
    }
  }
`;
