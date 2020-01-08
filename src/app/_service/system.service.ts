import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor() {
  }

  url(): string {
    return environment.apiUrl;
  }

}
