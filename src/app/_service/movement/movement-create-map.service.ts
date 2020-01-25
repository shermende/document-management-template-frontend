import {Injectable} from '@angular/core';
import {SupportCrudService} from '../support/support-crud-service';
import {HttpClient} from '@angular/common/http';
import {SystemService} from '../system.service';
import {MovementCreateMap} from '../../_models/movement/movement-create-map';

@Injectable({
  providedIn: 'root'
})
export class MovementCreateMapService extends SupportCrudService<MovementCreateMap> {

  constructor(
    http: HttpClient,
    systemService: SystemService
  ) {
    super(http, systemService, 'movement-create-map');
  }

}
