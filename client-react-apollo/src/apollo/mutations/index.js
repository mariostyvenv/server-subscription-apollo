import { gql } from '@apollo/client'

export const REGISTER_USER = gql`
  mutation register($input: UserInfo!) {
    register(userInfo: $input) {
      user {
        id
        username
      }
    }
  }
`
