const { ApolloServer, pubsub } = require('./services')
const { typeDefs } = require('./apollo/types')
const { resolvers } = require('./apollo/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res, pubsub })
})

server.listen().then(({ url }) => console.log(`server started at ${url} 🚀`))
