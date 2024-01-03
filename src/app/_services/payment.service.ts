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

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class PaymentService {
  private apiURL = environment.baseAPIUrl + '/payments/';

  constructor(private httpclient: HttpClient, private errorService: ErrorService) { }

  save(obj: Payment): Observable<Payment> {
    return this.httpclient.post<Payment>(this.apiURL, obj, httpOptions)
      .pipe(
        catchError(this.errorService.handleError)
      );
  }
}
