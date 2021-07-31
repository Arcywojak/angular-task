import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class KeyAttacherInterceptor implements HttpInterceptor {

  constructor() {}  

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //  const clone = request.clone({
  //    headers: request.headers.set("X-API-KEY", "HoA")
  //  })
  //  return next.handle(clone);

  return next.handle(request)
  }
}
