import { gql } from '@apollo/client'

export const USER = gql`
  query user {
    user {
      id
      username
    }
  }
`

export const NAME_USER = gql`
  query hello($name: String!) {
    hello(name: $name) {
      saludar
    }
  }
`
