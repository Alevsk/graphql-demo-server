import { GraphQLSchema } from 'graphql';
import queryQL from './queryQL';
import mutationQL from './mutationQL';

const schemaQL = new GraphQLSchema({
  query: queryQL,
  mutation: mutationQL,
});

export default schemaQL;
