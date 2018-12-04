import { Injectable } from '@angular/core'
import { tap } from 'rxjs/operators'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Set Params in request
    //
    // The API didn't enable cross domain
    // so this code will be commented out.
    //
    // request = request.clone({
    //   setHeaders: {
    //     'Content-Type': 'application/json'
    //   }
    // })

    return next.handle(request)
  }
}
