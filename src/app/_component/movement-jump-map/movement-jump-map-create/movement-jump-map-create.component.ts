import {Component, OnInit} from '@angular/core';
import {SupportFormCreate} from '../../support/support-form-create';
import {MovementType} from '../../../_models/movement/movement-type';
import {MovementReason} from '../../../_models/movement/movement-reason';
import {MovementPoint} from '../../../_models/movement/movement-point';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {MovementBoardService} from '../../../_service/movement/movement-board.service';
import {MovementTypeService} from '../../../_service/movement/movement-type.service';
import {MovementReasonService} from '../../../_service/movement/movement-reason.service';
import {MovementPointService} from '../../../_service/movement/movement-point.service';
import {MovementJumpMap} from '../../../_models/movement/movement-jump-map';
import {MovementJumpMapService} from '../../../_service/movement/movement-jump-map.service';
import {MovementBoard} from '../../../_models/movement/movement-board';

@Component({
  selector: 'app-movement-jump-map-create',
  templateUrl: './movement-jump-map-create.component.html',
  styleUrls: ['./movement-jump-map-create.component.css']
})
export class MovementJumpMapCreateComponent extends SupportFormCreate<MovementJumpMap> implements OnInit {

  boards: MovementBoard[];
  types: MovementType[];
  reasons: MovementReason[];
  points: MovementPoint[];
  form: FormGroup;
  errors: any;

  constructor(
    protected location: Location,
    protected crudService: MovementJumpMapService,
    private router: Router,
    private formBuilder: FormBuilder,
    private boardService: MovementBoardService,
    private typeService: MovementTypeService,
    private reasonService: MovementReasonService,
    private pointService: MovementPointService
  ) {
    super(location, crudService);
  }

  ngOnInit() {
    this.boardService.page(0, 999).subscribe(response => this.boards = response._embedded.data);
    this.typeService.page(0, 999).subscribe(response => this.types = response._embedded.data);
    this.reasonService.page(0, 999).subscribe(response => this.reasons = response._embedded.data);
    this.pointService.page(0, 999).subscribe(response => this.points = response._embedded.data);

    this.form = this.formBuilder.group({
      board: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.required]),
      sequence: new FormControl('', [Validators.required]),
      targetPoint: new FormControl('', [Validators.required]),
    });
  }

  protected handleOk(response) {
    this.router.navigate(['/movement-jump-map']);
  }

}
