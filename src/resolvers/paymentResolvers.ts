import {PaymentService} from 'services/paymentService'

const paymentService = new PaymentService()

export const paymentResolvers = {
  Query: {
    payments: () => paymentService.all(),
  },
  Mutation: {
    updatePaymentStatus: (
      _parent: {},
      args: {paymentId: string; status: string},
    ) => {
      const paymentId = args.paymentId
      const status = args.status

      return paymentService.updateStatus(paymentId, status)
    },
  },
}
