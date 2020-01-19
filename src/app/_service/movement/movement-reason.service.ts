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
    protected http: HttpClient,
    protected systemService: SystemService
  ) {
    super(http, systemService, 'movement-reason');
  }

  findAllOnCreate(boardId: number, typeId: number, page: number = 0, size: number = 999, sort: string = 'id', direction: string = 'desc') {
    return this.page(page, size, sort, direction, `qCreateMapBoardId=${boardId}&qCreateMapTypeId=${typeId}`);
  }

  findAllOnMove(boardId: number, typeId: number, pointId: number, page: number = 0, size: number = 999, sort: string = 'id', direction: string = 'desc') {
    return this.page(page, size, sort, direction, `qMapBoardId=${boardId}&qMapTypeId=${typeId}&qMapSourcePointId=${pointId}`);
  }

}
