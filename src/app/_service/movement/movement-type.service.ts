import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SystemService} from '../system.service';
import {MovementType} from '../../_models/movement/movement-type';
import {SupportCrudService} from '../support/support-crud-service';

@Injectable({
  providedIn: 'root'
})
export class MovementTypeService extends SupportCrudService<MovementType> {

  constructor(
    http: HttpClient,
    systemService: SystemService
  ) {
    super(http, systemService, 'movement-type');
  }

  findAllOnCreate(boardId: number, page: number = 0, size: number = 999, sort: string = 'id', direction: string = 'desc') {
    return this.page(page, size, sort, direction, `qCreateMapBoardId=${boardId}`);
  }

}
