import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLNonNull
} from 'graphql';

const exampleQL = new GraphQLObjectType({
  name: 'exampleQL',
  description: 'This is an example QL object',
  fields: () => {
    return {
      key: {
        type: GraphQLString,
        resolve(example) {
          return example.key
        }
      },
      value: {
        type: GraphQLString,
        resolve(example) {
          return example.value
        }
      },
    }
  }
});

export default exampleQL;
