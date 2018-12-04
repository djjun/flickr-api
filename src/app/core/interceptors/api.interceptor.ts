import { Injectable } from '@angular/core'
import { tap } from 'rxjs/operators'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //Set Params in request
    request.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'dj-token-test'
      })
    })

    return next.handle(request).pipe(
      tap(
        event => {
          // Success
          if (event instanceof HttpResponse) {
            console.log('api call success :', event)
          }
        },
        error => {
          // Error response
          if (event instanceof HttpErrorResponse) {
            console.log('api call error :', error)
          }
        }
      )
    )
  }
}
