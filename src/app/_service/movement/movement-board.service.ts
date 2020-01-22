import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SystemService} from '../system.service';
import {MovementType} from '../../_models/movement/movement-type';
import {SupportCrudService} from '../support-crud-service';

@Injectable({
  providedIn: 'root'
})
export class MovementBoardService extends SupportCrudService<MovementType> {

  constructor(
    http: HttpClient,
    systemService: SystemService
  ) {
    super(http, systemService, 'movement-board');
  }

}
