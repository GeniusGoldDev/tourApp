import { GrandService } from './../_models/grandService';
import { Injectable } from '@angular/core';
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
export class GrandServicesService {
  private apiURL = environment.baseAPIUrl + '/grandservices/';

  constructor(private httpclient: HttpClient, private errorService: ErrorService) { }

  get(name: string): Observable<GrandService> {
    return this.httpclient.get<GrandService>(this.apiURL + name);
  }

  getList(): Observable<GrandService[]> {
    const addSpecificFields = '?fields=name,totalCost';
    return this.httpclient.get<GrandService[]>(this.apiURL + addSpecificFields);
  }

  save(obj: GrandService): Observable<GrandService> {
    if (obj.id != null && obj.id > 0) {
      return this.httpclient.put<GrandService>(this.apiURL + obj.id + '/', obj, httpOptions)
      .pipe(
        catchError(this.errorService.handleError)
      );
    }

    return this.httpclient.post<GrandService>(this.apiURL, obj, httpOptions)
      .pipe(
        catchError(this.errorService.handleError)
      );
  }

  delete(id: number): Observable<any> {
    return this.httpclient.delete(this.apiURL + id, httpOptions)
    .pipe(
      catchError(this.errorService.handleError)
    );
  }

  getCustomers(grandServiceId: number): Observable<any> {
    const passangersAPIUrl = grandServiceId + '/users/';
    return this.httpclient.get<GrandService[]>(this.apiURL + passangersAPIUrl);
  }
  getCustomer(grandServiceId: number, customerId: number): Observable<any> {
    const passangerAPIUrl = grandServiceId + '/users/' + customerId + '/';
    return this.httpclient.get<GrandService[]>(this.apiURL + passangerAPIUrl);
  }
  purchase(grandServiceId: number, customerId: number, postObject: any) {
    return this.httpclient.put<any>(this.apiURL + grandServiceId + '/users/' + customerId + '/', postObject, httpOptions)
    .pipe(
      catchError(this.errorService.handleError)
    );
  }
}
