import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ErrorService } from './error.service';
import { CloneType } from '../_helpers/clone.helper';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CloneService {
  private apiURL = environment.baseAPIUrl + '/clone/';

  constructor(private httpclient: HttpClient, private errorService: ErrorService) { }

  get(cloneTypeId: number, cloneType: CloneType): Observable<any> {
    return this.httpclient
      .get(this.apiURL + cloneType + '/' + cloneTypeId.toString())
      .catch(this.errorService.handleError);
  }
}
