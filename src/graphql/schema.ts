import { GraphQLSchema } from 'graphql';
import { GraphQLRootQuery } from './query';

export default new GraphQLSchema({
  query: GraphQLRootQuery,
});
