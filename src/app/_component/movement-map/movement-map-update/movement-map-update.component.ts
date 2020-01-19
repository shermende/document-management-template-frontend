import {Component, OnInit} from '@angular/core';
import {SupportFormUpdate} from '../../support/support-form-update';
import {MovementMap} from '../../../_models/movement/movement-map';
import {MovementType} from '../../../_models/movement/movement-type';
import {MovementReason} from '../../../_models/movement/movement-reason';
import {MovementPoint} from '../../../_models/movement/movement-point';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MovementTypeService} from '../../../_service/movement/movement-type.service';
import {MovementReasonService} from '../../../_service/movement/movement-reason.service';
import {MovementPointService} from '../../../_service/movement/movement-point.service';
import {MovementMapService} from '../../../_service/movement/movement-map.service';
import {MovementBoardService} from '../../../_service/movement/movement-board.service';

@Component({
  selector: 'app-movement-map-update',
  templateUrl: './movement-map-update.component.html',
  styleUrls: ['./movement-map-update.component.css']
})
export class MovementMapUpdateComponent extends SupportFormUpdate<MovementMap> implements OnInit {

  id: number;
  boards: MovementType[];
  type: MovementType;
  types: MovementType[];
  reasons: MovementReason[];
  points: MovementPoint[];

  constructor(
    protected route: ActivatedRoute,
    protected location: Location,
    protected crudService: MovementMapService,
    private router: Router,
    private formBuilder: FormBuilder,
    private boardService: MovementBoardService,
    private typeService: MovementTypeService,
    private reasonService: MovementReasonService,
    private pointService: MovementPointService
  ) {
    super(route, location, crudService);
  }

  ngOnInit() {
    this.boardService.page(0, 999).subscribe(response => this.boards = response._embedded.data);
    this.typeService.page(0, 999).subscribe(response => this.types = response._embedded.data);
    this.reasonService.page(0, 999).subscribe(response => this.reasons = response._embedded.data);
    this.pointService.page(0, 999).subscribe(response => this.points = response._embedded.data);
    this.form = this.formBuilder.group({
      board: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      sourcePoint: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.required]),
      targetPoint: new FormControl('', [Validators.required]),
    });
    // load data
    this.crudService.read(Number(this.route.snapshot.paramMap.get('id'))).subscribe(response => {
      this.form = this.formBuilder.group({
        board: new FormControl(response.board.id, [Validators.required]),
        type: new FormControl(response.type.id, [Validators.required]),
        sourcePoint: new FormControl(response.sourcePoint.id, [Validators.required]),
        reason: new FormControl(response.reason.id, [Validators.required]),
        targetPoint: new FormControl(response.targetPoint.id, [Validators.required]),
      });
    });
  }

  protected handleOk(response) {
    this.router.navigate(['/movement-map']);
  }

}
