import { split, HttpLink, ApolloClient, InMemoryCache } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/client/link/ws'

const URL = 'http://localhost:4000/graphql'
const WS_URL = 'ws://localhost:4000/graphql'

const httpLink = new HttpLink({
  uri: URL
})

const wsLink = new WebSocketLink({
  uri: WS_URL,
  options: {
    reconnect: true
  }
})

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

export const client = new ApolloClient({
  link, cache: new InMemoryCache()
})
