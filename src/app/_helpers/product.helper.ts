import {Injectable} from '@angular/core';

export enum ProductType {
  Accommodation = 'Accommodation',
  Transportation = 'Transportation',
  Airlines = 'Airlines',
  Entertainment = 'Entertainment',
  Tour_Guides = 'Optional Excursions'
}

@Injectable({
  providedIn: 'root'
})

export class ProductHelper {

}
