import {Injectable} from '@angular/core';
import {SupportCrudService} from '../support-crud-service';
import {HttpClient} from '@angular/common/http';
import {SystemService} from '../system.service';
import {MovementPoint} from '../../_models/movement/movement-point';

@Injectable({
  providedIn: 'root'
})
export class MovementPointService extends SupportCrudService<MovementPoint> {

  constructor(
    http: HttpClient,
    systemService: SystemService
  ) {
    super(http, systemService, 'movement-point');
  }

}
