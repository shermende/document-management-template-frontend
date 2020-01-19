import {MovementType} from './movement-type';
import {MovementReason} from './movement-reason';
import {MovementPoint} from './movement-point';
import {MovementBoard} from './movement-board';

export class MovementMap {
  id: number;
  board: MovementBoard;
  type: MovementType;
  sourcePoint: MovementPoint;
  reason: MovementReason;
  targetPoint: MovementPoint;
}
