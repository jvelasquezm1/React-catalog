import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Chapter = {
  __typename?: 'Chapter';
  description: Scalars['String'];
  id: Scalars['ID'];
  identifier: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ChapterInput = {
  description: Scalars['String'];
  identifier: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  ChapterCreate: Chapter;
  ChapterDelete?: Maybe<Scalars['Boolean']>;
  ChapterUpdate: Chapter;
  userCreate: User;
  userDelete?: Maybe<Scalars['Boolean']>;
  userUpdate: User;
};


export type MutationChapterCreateArgs = {
  data?: Maybe<ChapterInput>;
};


export type MutationChapterDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationChapterUpdateArgs = {
  data?: Maybe<ChapterInput>;
  id: Scalars['ID'];
};


export type MutationUserCreateArgs = {
  data?: Maybe<UserInput>;
};


export type MutationUserDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationUserUpdateArgs = {
  data?: Maybe<UserInput>;
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  Chapters: Array<Chapter>;
  health: Scalars['String'];
  users: Array<User>;
};

export enum Sort {
  Asc = 'asc',
  Desc = 'desc'
}

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type UserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type ChaptersQueryVariables = Exact<{ [key: string]: never; }>;


export type ChaptersQuery = (
  { __typename?: 'Query' }
  & { Chapters: Array<(
    { __typename?: 'Chapter' }
    & Pick<Chapter, 'id' | 'title' | 'description' | 'identifier' | 'image'>
  )> }
);


export const ChaptersDocument = gql`
    query Chapters {
  Chapters {
    id
    title
    description
    identifier
    image
  }
}
    `;

/**
 * __useChaptersQuery__
 *
 * To run a query within a React component, call `useChaptersQuery` and pass it any options that fit your needs.
 * When your component renders, `useChaptersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChaptersQuery({
 *   variables: {
 *   },
 * });
 */
export function useChaptersQuery(baseOptions?: Apollo.QueryHookOptions<ChaptersQuery, ChaptersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChaptersQuery, ChaptersQueryVariables>(ChaptersDocument, options);
      }
export function useChaptersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChaptersQuery, ChaptersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChaptersQuery, ChaptersQueryVariables>(ChaptersDocument, options);
        }
export function useChaptersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ChaptersQuery, ChaptersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ChaptersQuery, ChaptersQueryVariables>(ChaptersDocument, options);
        }
export type ChaptersQueryHookResult = ReturnType<typeof useChaptersQuery>;
export type ChaptersLazyQueryHookResult = ReturnType<typeof useChaptersLazyQuery>;
export type ChaptersSuspenseQueryHookResult = ReturnType<typeof useChaptersSuspenseQuery>;
export type ChaptersQueryResult = Apollo.QueryResult<ChaptersQuery, ChaptersQueryVariables>;