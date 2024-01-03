import { ErrorService } from './error.service';
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Payment } from '../_models/payment';
import { environment } from 'src/environments/environment';
import { CustomerPayment } from '../_models/customerPayment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class CustomerPaymentsService {
  private apiURL = environment.baseAPIUrl + '/customerpayments/';

  constructor(private httpclient: HttpClient, private errorService: ErrorService) { }

  getByCustomer(customerId: number): Observable<CustomerPayment[]> {
    return this.httpclient.get<CustomerPayment[]>(this.apiURL + '?customerId=' + customerId);
  }
  getByCustomerAndGrandService(customerId: number, grandServiceId: number): Observable<CustomerPayment[]> {
    return this.httpclient.get<CustomerPayment[]>(this.apiURL + '?customerId=' + customerId + '&grandServiceId=' + grandServiceId);
  }

  save(obj: CustomerPayment): Observable<CustomerPayment> {
    return this.httpclient.post<CustomerPayment>(this.apiURL, obj, httpOptions)
      .pipe(
        catchError(this.errorService.handleError)
      );
  }
}
