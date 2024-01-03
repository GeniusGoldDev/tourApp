export class UserProduct {
    id: number;
    productId: number;
    totalCost: number;
    name: string;
    promotionalDesc: string;

  constructor() {
    this.id = 0;
    this.productId = 0;
    this.totalCost = 0;
    this.name = '';
    this.promotionalDesc = '';
    }
}
