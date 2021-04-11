import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private ngxSpinnerService: NgxSpinnerService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.ngxSpinnerService.show('globalLoading');
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.ngxSpinnerService.hide('globalLoading');
          }
        },
        () => {
          this.ngxSpinnerService.hide('globalLoading');
        }
      )
    );
  }
}
