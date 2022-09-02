import { ApolloServer } from 'apollo-server';
import { schema } from '../graphql';

const server = new ApolloServer({
  cache: 'bounded',
  csrfPrevention: true,
  schema,
});

server.listen(4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
