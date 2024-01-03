import { PaymentStep } from './../_models/paymentStep';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ErrorService } from './error.service';
import { Http } from '@angular/http';
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
export class PaymentStepService {
  private apiURL = environment.baseAPIUrl + '/paymentsteps/';

  constructor(private http: Http, private httpclient: HttpClient, private errorService: ErrorService) { }

  getList(grandServiceId: number): Observable<PaymentStep[]> {
    return this.http
      .get(this.apiURL + grandServiceId.toString())
        .map(res => res.json());
  }

  save(paymentStepsArray: PaymentStep[], grandServiceId: number): Observable<PaymentStep> {
    return this.httpclient.put<PaymentStep>(this.apiURL + grandServiceId.toString() + '/', paymentStepsArray, httpOptions)
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
}
