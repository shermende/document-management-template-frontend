import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export class SupportHateoasService {

  protected readonly url: string;
  protected readonly uri: string;

  constructor(
    protected http: HttpClient,
    url: string,
    uri: string
  ) {
    this.url = url;
    this.uri = uri;
  }

  home(): Observable<any> {
    return this.http.get<any>(`${this.url}/${this.uri}`);
  }

  page(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

}
