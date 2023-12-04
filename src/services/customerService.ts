import {customers} from 'services/mockData/index'

export class CustomerService {
  all() {
    return customers
  }

  findCustomer(id: string) {
    return customers.find(c => {
      return c.id === id
    })
  }

  updateCustomer(customerId: string, firstName: string, lastName: string) {
    const existingCustomer = customers.find(c => {
      return c.id === customerId
    })
    if (existingCustomer && firstName) {
      existingCustomer.firstName = firstName
    }
    if (existingCustomer && lastName) {
      existingCustomer.lastName = lastName
    }

    return existingCustomer
  }
}
