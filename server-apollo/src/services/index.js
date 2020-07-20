const { ApolloServer, gql, PubSub } = require('apollo-server')
const pubsub = new PubSub() // Suscriptions

module.exports = {
  ApolloServer,
  gql,
  pubsub
}
