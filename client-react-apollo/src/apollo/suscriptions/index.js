import { gql } from '@apollo/client'

export const SUSCRIPTION_REGISTER_USER = gql`
  subscription register {
    newUser {
      id
      username
      firstLetterOfUsername
    }
  }
`
