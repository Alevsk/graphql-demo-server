import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLFloat,
} from 'graphql';

import actorQL from './actorQL';
import commentQL from './commentQL';

const movieQL = new GraphQLObjectType({
  name: 'movieQL',
  description: 'This is a movie QL object',
  fields: () => {
    return {
      name: {
        type: GraphQLString,
        resolve(movie) {
          return movie.name;
        }
      },
      score: {
        type: GraphQLFloat,
        resolve(movie) {
          return movie.score;
        }
      },
      year: {
        type: GraphQLInt,
        resolve(movie) {
          return movie.year;
        }
      },
      actors: {
        type: new GraphQLList(actorQL),
        resolve(movie) {
          return movie.actors;
        }
      },
      comments: {
        type: new GraphQLList(commentQL),
        resolve(movie) {
          return movie.comments;
        }
      },
    }
  }
});

export default movieQL;
