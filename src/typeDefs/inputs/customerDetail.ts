import {gql} from 'apollo-server'

export const UpdateCustomerDetailInput = gql`
  input UpdateCustomerDetailInput {
    firstName: String
    lastName: String
  }
`
