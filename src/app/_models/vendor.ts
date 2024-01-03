export class Vendor {
  id: number;
  name: string;
  typeName: string;
  address: string;
  additionalInfo: string;
  establishmentPhone: string;
  establishmentWebsite: string;
  parentCompany: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  establishmentExt: string;
  contactExt: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.typeName = '';
    this.address = '';
    this.establishmentPhone = '';
    this.establishmentWebsite = '';
    this.parentCompany = '';
    this.contactName = '';
    this.contactPhone = '';
    this.contactEmail = '';
    this.additionalInfo = '';
    this.establishmentExt = '';
    this.contactExt = '';
  }
}
