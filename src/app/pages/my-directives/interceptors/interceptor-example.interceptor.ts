import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class InterceptorExampleInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log(`consumiendo ${request.url}`);

    const modifiedRequest = request.clone({
      headers: request.headers.append('Auth', 'abc'),
    });
    return next.handle(modifiedRequest).pipe(
      tap((event) => {
        console.log({ [request.url]: { event } });
        if (event.type === HttpEventType.Response) {
          console.log({ body: event.body });
        }
      })
    );
  }
}
