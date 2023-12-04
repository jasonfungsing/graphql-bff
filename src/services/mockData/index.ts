// TODO no need for this file and it's parent directory when go for prod. This is for mock testing only
export const customers = [
  {
    id: 'customerId1',
    firstName: 'customer1 firstName',
    lastName: 'customer1 lastName',
  },
  {
    id: 'customerId2',
    firstName: 'customer2 firstName',
    lastName: 'customer2 lastName',
  },
]

export const payments = [
  {
    id: 'paymentId123',
    customer: customers[0],
    amount: 60,
    status: 'pending',
  },
  {
    id: 'paymentId456',
    customer: customers[1],
    amount: 100,
    status: 'pending',
  },
]
