import {Injectable} from '@angular/core';
import {SupportCrudService} from '../support-crud-service';
import {MovementReason} from '../../_models/movement/movement-reason';
import {HttpClient} from '@angular/common/http';
import {SystemService} from '../system.service';

@Injectable({
  providedIn: 'root'
})
export class MovementReasonService extends SupportCrudService<MovementReason> {

  constructor(
    http: HttpClient,
    systemService: SystemService
  ) {
    super(http, systemService, 'movement-reason');
  }

}
