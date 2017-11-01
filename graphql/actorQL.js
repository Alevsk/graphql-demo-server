import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLFloat,
} from 'graphql';

const actorQL = new GraphQLObjectType({
  name: 'actorQL',
  description: 'This is an actor QL object',
  fields: () => {
    return {
      name: {
        type: GraphQLString,
        resolve(actor) {
          return actor.name;
        }
      },
      age: {
        type: GraphQLInt,
        resolve(actor) {
          return actor.age;
        }
      },
      country: {
        type: GraphQLString,
        resolve(actor) {
          return actor.country;
        }
      },
    }
  }
});

export default actorQL;
