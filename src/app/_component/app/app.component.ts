import {Component} from '@angular/core';
import {AuthenticationService} from '../../_service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
