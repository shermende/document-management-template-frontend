import {SupportDataSource} from './support-data-source';
import {MovementReason} from '../_models/movement/movement-reason';
import {MovementReasonService} from '../_service/movement/movement-reason.service';

export class MovementReasonDataSource extends SupportDataSource<MovementReason> {

  constructor(
    service: MovementReasonService
  ) {
    super(service);
  }

}
