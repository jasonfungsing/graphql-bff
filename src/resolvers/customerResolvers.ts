import {CustomerService} from 'services/customerService'
import {UserInputError} from 'apollo-server'

const customerService = new CustomerService()

type FindCustomerArgs = {
  id: string;
};

// @ts-ignore
export const customerResolvers = {
  Query: {
    customers: () => customerService.all(),
    findCustomer: (_parent: {},
                   args: { id: string }
    ) => {
      return customerService.findCustomer(args.id);
    },
  },
  Mutation: {
    updateCustomerDetail: (
      _parent: {},
      args: {
        customerId: string
        input: {firstName: string; lastName: string}
      },
    ) => {
      // TODO validation here for the args
      if (args.customerId === '0') {
        throw new UserInputError('Invalid customer Id', {
          argumentName: 'customerId',
        })
      }
      const customerId = args.customerId
      const firstName = args.input.firstName
      const lastName = args.input.lastName
      return customerService.updateCustomer(customerId, firstName, lastName)
    },
  },
}
