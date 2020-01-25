import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../_models/user';
import {map} from 'rxjs/operators';
import {SystemService} from './system.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly accessTokenHolder = 'accessToken';
  // oauth client app settings
  private readonly headers = new HttpHeaders({
    'Authorization': `Basic Y2xpZW50SWQ6Y2xpZW50U2VjcmV0`
  });

  private readonly url: string;
  private currentUser: BehaviorSubject<User>;

  constructor(
    private route: Router,
    private http: HttpClient,
    private systemService: SystemService
  ) {
    this.url = systemService.url();
    this.currentUser = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(this.accessTokenHolder)));
  }

  login(username: string, password: string): Observable<any> {
    var formData: any = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('grant_type', 'password');

    return this.http.post<any>(`${this.url}/oauth/token`, formData, {headers: this.headers})
      .pipe(map(response => {
        console.log(response);
        localStorage.setItem(this.accessTokenHolder, JSON.stringify(response));
        this.currentUser.next(response);
        return response;
      }));
  }

  registration(username: string, password: string) {
    return this.http.post<any>(`${this.url}/auth/registration`, {username, password});
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(this.accessTokenHolder);
    this.currentUser.next(null);
    this.route.navigate(['/auth/login']);
  }

  getCurrentUser(): User {
    return this.currentUser.getValue();
  }

  isAuthenticated(): boolean {
    return this.currentUser.getValue() !== null;
  }

  isNotAuthenticated(): boolean {
    return this.currentUser.getValue() === null;
  }

}
