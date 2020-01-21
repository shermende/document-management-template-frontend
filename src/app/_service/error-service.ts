import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ErrorCommonComponent} from '../_component/dialog/error/error-common/error-common.component';
import {ErrorAccessDeniedComponent} from '../_component/dialog/error/error-access-denied/error-access-denied.component';
import {ErrorUnauthorizedComponent} from '../_component/dialog/error/error-unauthorized/error-unauthorized.component';
import {Router} from '@angular/router';
import {ErrorLoginComponent} from '../_component/dialog/error/error-login/error-login.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  login(data): void {
    const dialogRef = this.dialog.open(ErrorLoginComponent, {
      width: '300px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  accessDenied(data): void {
    const dialogRef = this.dialog.open(ErrorAccessDeniedComponent, {
      width: '300px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  unauthorized(data): void {
    const dialogRef = this.dialog.open(ErrorUnauthorizedComponent, {
      width: '300px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.router.navigate(['/login']);
    });
  }

  commonError(data): void {
    const dialogRef = this.dialog.open(ErrorCommonComponent, {
      width: '300px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
