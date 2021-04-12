import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

import { environment } from '@environments/environment';

const API_URL = `${environment.API_DOMAIN}`;

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public get<T>(path: string, options?: any) {
    return this.http
      .get<T>(`${API_URL}/${path}`, options)
      .pipe(catchError(this.handleError));
  }

  public post<T>(path: string, body: any) {
    return this.http
      .post<T>(`${API_URL}/${path}`, body)
      .pipe(catchError(this.handleError));
  }

  public put<T>(path: string, body: any) {
    return this.http
      .put<T>(`${API_URL}/${path}`, body)
      .pipe(catchError(this.handleError));
  }
  public patch<T>(path: string, body: any, options?: any) {
    return this.http
      .patch<T>(`${API_URL}/${path}`, body, options)
      .pipe(catchError(this.handleError));
  }

  public delete<T>(path: string) {
    return this.http
      .delete<T>(`${API_URL}/${path}`)
      .pipe(catchError(this.handleError));
  }  

  // Error handler
  private handleError(error) {    
    Swal.fire('!Error!', error.error.message, 'error')
    return throwError(error);
  }
}
