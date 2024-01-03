export class CustomerDiscount {
  id: number;
  created: string;
  updated: string;
  additionalInfo: string;
  amount: number;
  customerId: number;
  deleted: boolean;
  grandServiceId: number;
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
  }
}
