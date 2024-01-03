import { ProductService } from './productService';

export class Product {
    id: number;
    grandServiceId: number;
    created: string;
    updated: string;
    vendorName: string;
    productTypeName: string;
    dateTimeFrom: string;
    dateTimeTo: string;
    services: ProductService[];

    constructor() {
    this.id = 0;
    this.grandServiceId = 0;
    this.created = '';
    this.updated = '';
    this.vendorName = '';
    this.productTypeName = '';
    this.dateTimeFrom = '';
    this.dateTimeTo = '';
    this.services = new Array<ProductService>();
    }
}
