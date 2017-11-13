import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLBoolean,
  GraphQLFloat,
} from 'graphql';

import movieQL from './movieQL';

const actorInputQL = new GraphQLInputObjectType({
  name: 'actorInputQL',
  fields: {
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    country: { type: GraphQLString },
  },
});

const commentInputQL = new GraphQLInputObjectType({
  name: 'commentInputQL',
  fields: {
    user: { type: GraphQLString },
    commentary: { type: GraphQLString },
    timestamp: { type: GraphQLString },
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'This is the root Mutation',
  fields: () => {
    return Object.assign({
      createMovie: {
        type: movieQL,
        args: {
          name: {
            type: new GraphQLNonNull(GraphQLString),
          },
          year: {
            type: GraphQLInt,
          },
          score: {
            type: GraphQLFloat,
          },
          actors: {
            type: new GraphQLList(actorInputQL),
          },
          comments: {
            type: new GraphQLList(commentInputQL),
          },
        },
        resolve(root, args, request) {
          // do something here
          return args;
        },
      },
    });
  },
});

export default mutation;
