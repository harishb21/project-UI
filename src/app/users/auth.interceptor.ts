import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token: string = 'TOKEN_FIRST';
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const updateReq = req.clone({
      setHeaders: {
        token: this.token,
      },
    });

    return next.handle(updateReq).pipe(
      tap((res) => {
        console.log('INSIDE INTERCEPTOR');
      })
    );
  }
}
