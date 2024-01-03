export class GrandService {
  id: number;
  name: string;
  availNum: number;
  dateTimeFrom: string;
  dateTimeTo: string;
  promotionalDesc: string;
  videoUrl: string;
  inclusions: string;
  priceDetails: string;
  totalCost: number;
  quickBooksId: number;
  isPublished: boolean;
  minOrders: number;
  location: string;
  tag: string;
  isTaxIncluded: boolean;
  taxCode: string;
  director: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.availNum = 0;
    this.dateTimeFrom = '';
    this.dateTimeTo = '';
    this.promotionalDesc = '';
    this.videoUrl = '';
    this.inclusions = '';
    this.priceDetails = '';
    this.totalCost = 0;
    this.quickBooksId = 0;
    this.isPublished = false;
    this.minOrders = 0;
    this.location = '';
    this.tag = '';
    this.isTaxIncluded = false;
    this.taxCode = '';
    this.director = '';
  }
}
