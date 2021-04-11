import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './spiner/spiner.service';


export const httpInterceptorProviders = [
     { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
];