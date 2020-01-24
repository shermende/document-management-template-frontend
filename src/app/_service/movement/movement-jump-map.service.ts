import {Injectable} from '@angular/core';
import {SupportCrudService} from '../support-crud-service';
import {HttpClient} from '@angular/common/http';
import {SystemService} from '../system.service';
import {MovementJumpMap} from '../../_models/movement/movement-jump-map';

@Injectable({
  providedIn: 'root'
})
export class MovementJumpMapService extends SupportCrudService<MovementJumpMap> {

  constructor(
    http: HttpClient,
    systemService: SystemService
  ) {
    super(http, systemService, 'movement-jump-map');
  }

}
