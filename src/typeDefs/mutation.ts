import {gql} from 'apollo-server'

export const mutation = gql`
  type Mutation {
    updatePaymentStatus(paymentId: ID!, status: String!): Payment
    updateCustomerDetail(
      customerId: ID!
      input: UpdateCustomerDetailInput!
    ): Customer
  }
`
