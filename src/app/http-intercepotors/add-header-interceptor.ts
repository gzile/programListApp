import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { token } from '../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class AddHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the Authorization header
    const clonedRequest = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) });

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
}

