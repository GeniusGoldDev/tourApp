export class CustomerPayment {
  id: number;
  created: string;
  updated: string;
  additionalInfo: string;
  amount: number;
  customerId: number;
  deleted: boolean;
  grandServiceId: number;
  paymentDate: string;
  paymentMethod: string;
  paymentStepId: number;
  transactionId: number;
  customerGrandServiceId: number;

  constructor() {
    this.id = 0;
    this.created = '';
    this.updated = '';
    this.additionalInfo = '';
    this.amount = 0;
    this.customerId = 0;
    this.deleted = false;
    this.grandServiceId = 0;
    this.paymentDate = '';
    this.paymentMethod = '';
    this.paymentStepId = null;
    this.transactionId = null;
    this.customerGrandServiceId = 0;
  }
}
