const { gql } = require('../services')

const typeDefs = gql`
  type Welcome {
    saludar: String
  }

  type User {
    id: ID!
    username: String
    firstLetterOfUsername: String
  }

  type Error {
    field: String!
    message: String!
  }

  type RegisterResponse {
    errors: [Error!]!
    user: User
  }

  input UserInfo {
    username: String!
    password: String!
    age: Int
  }

  type Query {
    hello(name: String!): Welcome
    user: User
  }

  type Mutation {
    register(userInfo: UserInfo!): RegisterResponse!
    login(userInfo: UserInfo!): String!
  }

  type Subscription {
    newUser: User!
  }
`

module.exports = {
  typeDefs
}
