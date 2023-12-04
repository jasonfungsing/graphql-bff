import {payments} from 'services/mockData/index'

export class PaymentService {
  all() {
    return payments
  }

  updateStatus(paymentId: string, status: string) {
    const payment = payments.find(p => {
      return p.id === paymentId
    })
    if (payment) {
      payment.status = status
    }

    return payment
  }
}
