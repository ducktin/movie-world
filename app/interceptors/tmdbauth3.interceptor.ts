import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
@Injectable()
export class TMDBAuth3Interceptor implements HttpInterceptor {
  api_key = '12930ea2755d90c7f3650da3ffae4e3c';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.startsWith('https://api.themoviedb.org/3')) {
      return next.handle(req);
    }
    const authReq = req.clone({
      params: req.params.append('api_key', this.api_key)
    });
    return next.handle(authReq);
  }
}
