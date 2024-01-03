export class Customer {
  id: number;
  quickBooksId: number;
  email: string;
  firstName: string;
  lastName: string;
  middleName: string;
  dob: string;
  street: string;
  phone: string;
  city: string;
  country: string;
  postalCode: string;
  title: string;
  stepId: number;
  locale: string;
  salesPersonName: string;
  lastReached: string;
  password: string;
  totalSpent: number;
  roles: string[];
  created: string;
  updated: string;
  browsedServices: any[];
  passportNumber: string;
  passportName: string;
  passportIssueDate: string;
  passportExpiryDate: string;
  passportIssuePlace: string;
  passportPhotoFile: string;
  goesBy: string;

  constructor() {
    this.id = 0;
    this.quickBooksId = 0;
    this.email = '';
    this.firstName = '';
    this.lastName = '';
    this.middleName = '';
    this.dob = null;
    this.street = '';
    this.phone = '';
    this.city = '';
    this.country = '';
    this.postalCode = '';
    this.title = '';
    this.stepId = 0;
    this.locale = '';
    this.salesPersonName = '';
    this.lastReached = '';
    this.password = '';
    this.totalSpent = 0;
    this.roles = new Array<string>();
    this.created = null;
    this.updated = null;

    this.passportNumber = '';
    this.passportName = '';
    this.passportIssueDate = null;
    this.passportExpiryDate = null;
    this.passportIssuePlace = '';
    this.passportPhotoFile = '';

    this.goesBy = '';
  }
}
