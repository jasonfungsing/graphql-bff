import {gql} from 'apollo-server'

export const query = gql`
  type Query {
    payments: [Payment]
    customers: [Customer]
    findCustomer(id: String!): Customer
    songs(artistName: String): [Song]
  }
`
