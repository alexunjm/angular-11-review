import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorExampleInterceptor } from './interceptor-example.interceptor';

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorExampleInterceptor,
    multi: true,
  },
];
