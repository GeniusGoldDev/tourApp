export class PriceModel {
    id: number;
    grandServiceId: number;
    roomOccupancy: number;
    regPrice: number;
    discountPrice: number;
    created: string;
    deleted: boolean;
    updated: string;

    constructor() {
        this.id = null;
        this.grandServiceId = 0;
        this.roomOccupancy = 2;
        this.regPrice = 0;
        this.discountPrice = 0;
        this.created = null;
        this.updated = null;
        this.deleted = false;
    }
}

