import {gql} from 'apollo-server'

export const Payment = gql`
  type Payment {
    id: String
    customer: Customer
    amount: Int
    status: String
  }
`
