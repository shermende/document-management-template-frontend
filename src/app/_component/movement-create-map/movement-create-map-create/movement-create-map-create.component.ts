import {Component, OnInit} from '@angular/core';
import {MovementType} from '../../../_models/movement/movement-type';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {MovementPointService} from '../../../_service/movement/movement-point.service';
import {Router} from '@angular/router';
import {MovementTypeService} from '../../../_service/movement/movement-type.service';
import {SupportFormCreate} from '../../support/support-form-create';
import {MovementPoint} from '../../../_models/movement/movement-point';
import {MovementReason} from '../../../_models/movement/movement-reason';
import {MovementReasonService} from '../../../_service/movement/movement-reason.service';
import {MovementCreateMapService} from '../../../_service/movement/movement-create-map.service';
import {MovementCreateMap} from '../../../_models/movement/movement-create-map';
import {MovementBoardService} from '../../../_service/movement/movement-board.service';

@Component({
  selector: 'app-movement-create-map-create',
  templateUrl: './movement-create-map-create.component.html',
  styleUrls: ['./movement-create-map-create.component.css']
})
export class MovementCreateMapCreateComponent extends SupportFormCreate<MovementCreateMap> implements OnInit {

  boards: MovementType[];
  types: MovementType[];
  reasons: MovementReason[];
  points: MovementPoint[];
  form: FormGroup;
  errors: any;

  constructor(
    protected location: Location,
    protected crudService: MovementCreateMapService,
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
      point: new FormControl('', [Validators.required]),
    });
  }

  protected handleOk(response) {
    this.router.navigate(['/movement-create-map']);
  }

}
