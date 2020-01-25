import {MovementType} from './movement-type';
import {MovementReason} from './movement-reason';
import {MovementPoint} from './movement-point';
import {MovementBoard} from './movement-board';

export class MovementJumpMap {
  id: number;
  board: MovementBoard;
  type: MovementType;
  reason: MovementReason;
  sequence: string;
  targetPoint: MovementPoint;
}
