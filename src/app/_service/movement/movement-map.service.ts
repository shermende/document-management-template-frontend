import {Injectable} from '@angular/core';
import {SupportCrudService} from '../support/support-crud-service';
import {HttpClient} from '@angular/common/http';
import {SystemService} from '../system.service';
import {MovementMap} from '../../_models/movement/movement-map';

@Injectable({
  providedIn: 'root'
})
export class MovementMapService extends SupportCrudService<MovementMap> {

  constructor(
    http: HttpClient,
    systemService: SystemService
  ) {
    super(http, systemService, 'movement-map');
  }

}
