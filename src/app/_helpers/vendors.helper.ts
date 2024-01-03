import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class VendorsHelper {
  public vendorTypes = [
    {
      id: 1,
      name: 'Accommodation'
    },
    {
      id: 2,
      name: 'Transportation'
    },
    {
      id: 3,
      name: 'Airlines'
    },
    {
      id: 4,
      name: 'Entertainment'
    },
    {
      id: 5,
      name: 'Optional Excursions'
    },
  ];

  constructor() { }

  getTypes() {
    return this.vendorTypes;
  }
}




