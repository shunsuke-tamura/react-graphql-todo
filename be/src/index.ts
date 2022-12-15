import {ApolloServer, gql} from 'apollo-server';

// GraphQL スキーマの定義
const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

// リゾルバーの定義
const resolvers = {
  Query: {
    hello: () => 'world!!!!!',
  },
};

// GraphQL サーバーを起動する
const server = new ApolloServer({typeDefs, resolvers});
server.listen().then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});
