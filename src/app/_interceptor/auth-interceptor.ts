import {Injectable} from '@angular/core';
import {AuthenticationService} from '../_service/authentication.service';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.auth.isNotAuthenticated()) {
      return next.handle(req);
    }

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'token ' + this.auth.getCurrentUser().token)
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }

}
