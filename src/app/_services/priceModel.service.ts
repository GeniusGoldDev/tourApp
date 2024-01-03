import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ErrorService } from './error.service';
import { environment } from 'src/environments/environment';
import { PriceModel } from '../_models/priceModel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PriceModelService {
  private apiURL = environment.baseAPIUrl + '/pricing/';

  constructor(private httpclient: HttpClient, private errorService: ErrorService) { }

  get(id: number): Observable<PriceModel> {
    return this.httpclient.get<PriceModel>(this.apiURL + id);
  }

  getByGrandService(grandServiceId: number): Observable<PriceModel[]> {
    const addSpecificFields = '?grandServiceId=' + grandServiceId;
    return this.httpclient.get<PriceModel[]>(this.apiURL + addSpecificFields);
  }

  save(obj: PriceModel): Observable<PriceModel> {
    if (obj.id != null && obj.id > 0) {
      return this.httpclient.put<PriceModel>(this.apiURL + obj.id + '/', obj, httpOptions)
      .pipe(
        catchError(this.errorService.handleError)
      );
    }

    return this.httpclient.post<PriceModel>(this.apiURL + obj.id.toString(), obj, httpOptions)
      .pipe(
        catchError(this.errorService.handleError)
      );
  }
}
