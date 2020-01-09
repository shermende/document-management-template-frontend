import {MovementType} from '../_models/movement/movement-type';
import {MovementTypeService} from '../_service/movement/movement-type.service';
import {SupportDataSource} from './support-data-source';

export class MovementTypeDataSource extends SupportDataSource<MovementType> {

  constructor(
    movementTypeService: MovementTypeService
  ) {
    super(movementTypeService);
  }

}
