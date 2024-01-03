export class PaymentStep {
  id: number;
  grandServiceId: number;
  amount: number;
  due: string;
  created: string;
  updated: string;
  type: string;

  constructor() {
    this.id = 0;
    this.grandServiceId = 0;
    this.due = '';
    this.amount = 0;
    this.created = '';
    this.updated = '';
    this.type = '';
  }
}
