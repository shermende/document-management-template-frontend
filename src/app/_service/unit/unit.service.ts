import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SystemService} from '../system.service';
import {SupportCrudService} from '../support-crud-service';
import {Unit} from '../../_models/unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService extends SupportCrudService<Unit> {

  constructor(
    http: HttpClient,
    systemService: SystemService
  ) {
    super(http, systemService, 'unit');
  }

  moveReasons(id: number) {
    return this.http.get<any>(`${this.url}/${this.uri}/${id}/move-reasons`);
  }

  move(id: number, resource: number) {
    return this.http.put<any>(`${this.url}/${this.uri}/${id}/move`, resource);
  }

}
