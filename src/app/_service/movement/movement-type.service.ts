import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SystemService} from '../system.service';
import {MovementType} from '../../_models/movement/movement-type';

@Injectable({
  providedIn: 'root'
})
export class MovementTypeService {

  private readonly url: string;
  private readonly uri: string;

  constructor(
    private http: HttpClient,
    private systemService: SystemService
  ) {
    this.url = systemService.url();
    this.uri = 'movement-type';
  }

  page(page: number, size: number, params: string): Observable<any> {
    return this.http.get<any>(`${this.url}/${this.uri}?${params}&page=${page}&size=${size}`);
  }

  read(id: bigint): Observable<any> {
    return this.http.get<any>(`${this.url}/${this.uri}/${id}`);
  }

  create(type: MovementType): Observable<any> {
    return this.http.post<any>(`${this.url}/${this.uri}`, type);
  }

  update(id: bigint, type: MovementType): Observable<any> {
    return this.http.put<any>(`${this.url}/${this.uri}/${id}`, type);
  }

  delete(id: bigint): Observable<any> {
    return this.http.delete<any>(`${this.url}/${this.uri}/${id}`);
  }


}
