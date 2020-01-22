import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../_models/user';
import {map} from 'rxjs/operators';
import {SystemService} from './system.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly url: string;
  private currentUser: BehaviorSubject<User>;

  constructor(
    private http: HttpClient,
    private systemService: SystemService
  ) {
    this.url = systemService.url();
    this.currentUser = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }

  login(username: string, password: string): Observable<any> {
    var formData: any = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('grant_type', 'password');

    let headers = new HttpHeaders({
      'Authorization': 'Basic Y2xpZW50SWQ6Y2xpZW50U2VjcmV0'
    });

    return this.http.post<any>(`${this.url}/oauth/token`, formData, {headers: headers})
      .pipe(map(response => {
        console.log(response);
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.currentUser.next(response);
        return response;
      }));
  }

  registration(username: string, password: string) {
    return this.http.post<any>(`${this.url}/auth/registration`, {username, password});
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUser.next(null);
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
