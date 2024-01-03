export class Asset {
  id: number;
  created: string;
  updated: string;
  grandServiceId: number;
  typeName: string;
  name: string;
  orderBy: number;
  url: string;

  constructor() {
    this.id = 0;
    this.created = '';
    this.updated = '';
    this.grandServiceId = 0;
    this.typeName = '';
    this.name = '';
    this.orderBy = 0;
    this.url = '';
  }
}
