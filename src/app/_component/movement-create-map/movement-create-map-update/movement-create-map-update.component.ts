import {Component, OnInit} from '@angular/core';
import {MovementType} from '../../../_models/movement/movement-type';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {MovementPointService} from '../../../_service/movement/movement-point.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MovementTypeService} from '../../../_service/movement/movement-type.service';
import {SupportFormUpdate} from '../../support/support-form-update';
import {MovementCreateMap} from '../../../_models/movement/movement-create-map';
import {MovementCreateMapService} from '../../../_service/movement/movement-create-map.service';
import {MovementReasonService} from '../../../_service/movement/movement-reason.service';
import {MovementReason} from '../../../_models/movement/movement-reason';
import {MovementPoint} from '../../../_models/movement/movement-point';
import {MovementBoardService} from '../../../_service/movement/movement-board.service';

@Component({
  selector: 'app-movement-create-map-update',
  templateUrl: './movement-create-map-update.component.html',
  styleUrls: ['./movement-create-map-update.component.css']
})
export class MovementCreateMapUpdateComponent extends SupportFormUpdate<MovementCreateMap> implements OnInit {

  boards: MovementType[];
  types: MovementType[];
  reasons: MovementReason[];
  points: MovementPoint[];
  id: number;

  constructor(
    protected route: ActivatedRoute,
    protected location: Location,
    protected crudService: MovementCreateMapService,
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
      reason: new FormControl('', [Validators.required]),
      point: new FormControl('', [Validators.required]),
    });

    // load data
    this.crudService.read(Number(this.route.snapshot.paramMap.get('id'))).subscribe(response => {
      this.form = this.formBuilder.group({
        board: new FormControl(response.board.id, [Validators.required]),
        type: new FormControl(response.type.id, [Validators.required]),
        point: new FormControl(response.point.id, [Validators.required]),
        reason: new FormControl(response.reason.id, [Validators.required]),
      });
    });
  }

  protected handleOk(response) {
    this.router.navigate(['/movement-create-map']);
  }

}
