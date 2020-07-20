const { ApolloServer, pubsub } = require('./services')
const { typeDefs } = require('./apollo/types')
const { resolvers } = require('./apollo/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, res }) => ({ req, res, pubsub })
})

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`🚀 Server ready at ${url}`)
  console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`)
})
