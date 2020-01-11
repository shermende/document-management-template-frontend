import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SystemService} from './system.service';

export class SupportCrudService<R> {

  private readonly url: string;
  private readonly uri: string;

  constructor(
    private http: HttpClient,
    private systemService: SystemService,
    uri: string
  ) {
    this.url = systemService.url();
    this.uri = uri;
  }

  page(page: number = 0, size: number = 10, sort: string = 'id', direction: string = 'desc', params: string = ''): Observable<any> {
    return this.http.get<any>(`${this.url}/${this.uri}?${params}&page=${page}&size=${size}&sort=${sort},${direction}`);
  }

  read(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${this.uri}/${id}`);
  }

  create(resource: R): Observable<any> {
    return this.http.post<any>(`${this.url}/${this.uri}`, resource);
  }

  update(id: number, resource: R): Observable<any> {
    return this.http.put<any>(`${this.url}/${this.uri}/${id}`, resource);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${this.uri}/${id}`);
  }

}
