import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql';

import movieQL from './movieQL';
import { movies } from '../data';

const query = new GraphQLObjectType({
    name: 'Query',
    description: 'This is the root Query',
    fields: () => {
      return Object.assign({
        getMovies: {
          type: new GraphQLList(movieQL),
          args: {},
          resolve(root, args, request) {
            // do some db queries
            return movies;
          }
        },
      });
    },
});

export default query;
