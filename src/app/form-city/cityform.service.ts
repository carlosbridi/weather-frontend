import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { City } from '../entities/City';

@Injectable()
export class CityFormService {
    // injetando o HttpClient
    constructor(private httpClient: HttpClient) { }

    // Obtem cidades
    _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers':
          'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      })
    };
    registerCity(city: City): Observable<any> {
      return this.httpClient.post("http://localhost:8083/registerCity", city, this._httpOptions).pipe(catchError(this.handleError));
    }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
   window.alert(error.error.message);
   return throwError(error.error.message);
  };

}