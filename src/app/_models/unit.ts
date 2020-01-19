import {MovementBoard} from './movement/movement-board';
import {MovementType} from './movement/movement-type';
import {MovementReason} from './movement/movement-reason';
import {MovementPoint} from './movement/movement-point';

export class Unit {
  title: string;
  board: MovementBoard;
  type: MovementType;
  reason: MovementReason;
  point: MovementPoint;
}
