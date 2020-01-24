import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ErrorService} from '../_service/error-service';
import {AuthenticationService} from '../_service/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private errorService: ErrorService,
    private authenticationService: AuthenticationService,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          switch (error.status) {
            case 400:
              console.log(error);
              if (error.error.errors !== undefined) {
                return throwError(error);
              }
              this.errorService.commonError(error.error);
              break;
            case 401:
              this.authenticationService.logout();
              this.errorService.unauthorized({});
              break;
            case 403:
              this.errorService.accessDenied({});
              break;
            default:
              this.errorService.commonError({});
              break;
          }
        }
        return throwError(error);
      })
    );
  }
}
