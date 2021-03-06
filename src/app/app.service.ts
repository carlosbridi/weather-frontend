import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class AppService {
    // injetando o HttpClient
    constructor(private httpClient: HttpClient) { }

    // Obtem cidades
    getCities(): Observable<any> {
      return this.httpClient.get("http://localhost:8083/listCity").pipe(retry(2),catchError(this.handleError));
    }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    return throwError(errorMessage);
  };

}