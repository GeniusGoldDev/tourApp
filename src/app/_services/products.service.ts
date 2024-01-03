import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ErrorService } from './error.service';
import { Product } from '../_models/product';
import { ProductHelper, ProductType } from '../_helpers/product.helper';
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
export class ProductsService {
  private apiURL = environment.baseAPIUrl + '/products/';

  constructor(private httpclient: HttpClient, private errorService: ErrorService) { }

  get(name: string): Observable<Product> {
    return this.httpclient
      .get<Product>(this.apiURL + name);
  }

  getList(grandServiceId: number, productType: string): Observable<Product[]> {
    return this.httpclient
      .get<Product[]>(this.apiURL + '?grandServiceId=' + grandServiceId.toString() + '&productTypeName=' + productType);
  }

  save(obj: Product[], grandServiceId: number): Observable<Product[]> {
    return this.httpclient.post<Product[]>(this.apiURL, obj, httpOptions)
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

  deleteService(id: number): Observable<any> {
    return this.httpclient.delete(environment.baseAPIUrl + '/services/' + id, httpOptions)
    .pipe(
      catchError(this.errorService.handleError)
    );
  }
}
