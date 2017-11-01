import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLFloat,
} from 'graphql';

const commentQL = new GraphQLObjectType({
  name: 'commentQL',
  description: 'This is a comment QL object',
  fields: () => {
    return {
      user: {
        type: GraphQLString,
        resolve(comment) {
          return comment.user;
        }
      },
      timestamp: {
        type: GraphQLString,
        resolve(comment) {
          return comment.timestamp;
        }
      },
      commentary: {
        type: GraphQLString,
        resolve(comment) {
          return comment.commentary;
        }
      },
    }
  }
});

export default commentQL;
