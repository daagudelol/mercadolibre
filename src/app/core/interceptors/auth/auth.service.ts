import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {         
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Token t0qu3n1nv3nt4d0`),
      });
      return next.handle(cloned);    
  }
}
