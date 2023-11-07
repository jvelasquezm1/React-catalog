import { gql } from 'apollo-server-fastify';

export const typeDefs = gql`
  type Chapter {
    id: ID!
    title: String!
    description: String!
    image: String
  }

  input ChapterInput {
    title: String!
    description: String!
    image: String
  }

  type Query {
    Chapters: [Chapter!]!
    health: String!
  }

  type Mutation {
    ChapterCreate(data: ChapterInput): Chapter!
    ChapterUpdate(id: ID!, data: ChapterInput): Chapter!
    ChapterDelete(id: ID!): Boolean
  }
`;

export const resolvers = {
  Query: {
    Chapters: async (_, __, { models }) => {
      return models.Chapter.findMany();
    },
  },
  Mutation: {
    ChapterCreate: async (_, { data }, { models }) => {
      return await models.Chapter.create({ data });
    },
  },
};
