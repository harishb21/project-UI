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
  token: string = '';
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (sessionStorage.getItem('token')) {
      const str: string | null = sessionStorage.getItem('token');
      this.token = JSON.parse(str === null ? '{}' : str);
    }

    const updateReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.token,
      },
    });

    return next.handle(updateReq).pipe(
      tap((res) => {
        console.log('INSIDE INTERCEPTOR');
      })
    );
  }
}
