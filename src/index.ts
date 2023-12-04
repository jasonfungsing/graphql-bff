import {ApolloServer} from 'apollo-server'
import {Customer} from 'typeDefs/types/customer'
import {Payment} from 'typeDefs/types/payment'
import {Song} from 'typeDefs/types/song'
import {UpdateCustomerDetailInput} from 'typeDefs/inputs/customerDetail'
import {query} from 'typeDefs/query'
import {mutation} from 'typeDefs/mutation'
import {customerResolvers} from 'resolvers/customerResolvers'
import {paymentResolvers} from 'resolvers/paymentResolvers'
import {songResolvers} from 'resolvers/songResolvers'


const typeDefs = [
  query,
  mutation,
  Customer,
  Payment,
  Song,
  UpdateCustomerDetailInput,
]

const resolvers = [customerResolvers, paymentResolvers, songResolvers]

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`)
})
