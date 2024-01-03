import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ErrorService } from './error.service';
import {FileType} from '../_helpers/file.helper';
import { environment } from 'src/environments/environment';
import { Asset } from '../_models/asset';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private apiUploadURL = environment.baseAPIUrl + '/upload/';
  private apiAssetsURL = environment.baseAPIUrl + '/listAssets/';
  private apiDeleteAssetsURL = environment.baseAPIUrl + '/assets/';

  constructor(private httpclient: HttpClient, private errorService: ErrorService) { }

  upload(formData: FormData): Observable<Asset[]> {
    return this.httpclient.post<Asset[]>(this.apiUploadURL, formData, httpOptions)
      .pipe(
        catchError(this.errorService.handleError)
      );
  }

  get(grandServiceId: number, type: FileType): Observable<Asset[]> {
    return this.httpclient
      .get<Asset[]>(this.apiAssetsURL + type + '/' + grandServiceId.toString() + '/');
  }
  delete(grandServiceId: number, fileId: number): Observable<any> {
    return this.httpclient
      .delete(this.apiDeleteAssetsURL + grandServiceId.toString() + '/' + fileId.toString() + '/');
  }
}
