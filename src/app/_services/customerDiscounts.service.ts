import { ErrorService } from './error.service';
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CustomerDiscount } from '../_models/customerDiscounts';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class CustomerDiscountsService {
  private apiURL = environment.baseAPIUrl + '/customerdiscounts/';

  constructor(private httpclient: HttpClient, private errorService: ErrorService) { }

  getByCustomerGrandService(customerGrandServiceId: number): Observable<CustomerDiscount[]> {
    return this.httpclient.get<CustomerDiscount[]>(this.apiURL + '?customerGrandServiceId=' + customerGrandServiceId);
  }

  save(obj: CustomerDiscount): Observable<CustomerDiscount> {
    if (obj.id === 0) {
      obj.id = null;
    }

    return this.httpclient.post<CustomerDiscount>(this.apiURL, obj, httpOptions)
      .pipe(
        catchError(this.errorService.handleError)
      );
  }
}
