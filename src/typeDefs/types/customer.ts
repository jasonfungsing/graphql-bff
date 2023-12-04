import {gql} from 'apollo-server'

export const Customer = gql`
  type Customer {
    id: String
    firstName: String
    lastName: String
  }
`
