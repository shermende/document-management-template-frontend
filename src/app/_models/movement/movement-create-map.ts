import {MovementType} from './movement-type';
import {MovementReason} from './movement-reason';
import {MovementPoint} from './movement-point';
import {MovementBoard} from './movement-board';

export class MovementCreateMap {
  id: number;
  board: MovementBoard;
  type: MovementType;
  reason: MovementReason;
  point: MovementPoint;
}
