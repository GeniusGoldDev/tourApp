import { Injectable } from '@angular/core';
import { Customer } from '../_models/Customer';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ErrorService } from './error.service';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiURL = environment.baseAPIUrl + '/users/';
  private customerServiceApiURL = environment.baseAPIUrl + '/customerservices/';

  constructor(private httpclient: HttpClient, private errorService: ErrorService) { }

  get(name: string): Observable<Customer> {
    return this.httpclient.get<Customer>(this.apiURL + name);
  }

  getList(): Observable<Customer[]> {
    return this.httpclient.get<Customer[]>(this.apiURL);
  }

  search(searchTerm: string): Observable<Customer[]> {
    // return this.httpclient.get<Customer[]>(this.apiURL);
    return this.httpclient.get<Customer[]>(this.apiURL + '?search=' + searchTerm);
  }

  save(obj: Customer): Observable<Customer> {
    if (obj.id != null && obj.id > 0) {
      return this.httpclient.put<Customer>(this.apiURL + obj.id + '/', obj, httpOptions)
      .pipe(
        catchError(this.errorService.handleError)
      );
    }

    return this.httpclient.post<Customer>(this.apiURL, obj, httpOptions)
      .pipe(
        catchError(this.errorService.handleError)
      );
  }

  getCustomerService(customerId: number, grandServiceId: number): Observable<any> {
    const filter = '?customerId=' + customerId + '&grandServiceId=' + grandServiceId;
    return this.httpclient.get<any>(this.customerServiceApiURL + filter);
  }
}
