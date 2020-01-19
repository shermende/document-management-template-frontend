import {Component, OnInit} from '@angular/core';
import {MovementType} from '../../../_models/movement/movement-type';
import {MovementReason} from '../../../_models/movement/movement-reason';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {MovementBoardService} from '../../../_service/movement/movement-board.service';
import {MovementTypeService} from '../../../_service/movement/movement-type.service';
import {MovementReasonService} from '../../../_service/movement/movement-reason.service';
import {SupportFormCreate} from '../../support/support-form-create';
import {UnitService} from '../../../_service/unit/unit.service';
import {Unit} from '../../../_models/unit';

@Component({
  selector: 'app-unit-create',
  templateUrl: './unit-create.component.html',
  styleUrls: ['./unit-create.component.css']
})
export class UnitCreateComponent extends SupportFormCreate<Unit> implements OnInit {

  boards: MovementType[];
  types: MovementType[];
  reasons: MovementReason[];
  form: FormGroup;
  errors: any;

  constructor(
    protected location: Location,
    protected crudService: UnitService,
    private router: Router,
    private formBuilder: FormBuilder,
    private boardService: MovementBoardService,
    private typeService: MovementTypeService,
    private reasonService: MovementReasonService,
  ) {
    super(location, crudService);
  }

  ngOnInit() {
    this.boardService.page(0, 999).subscribe(response => this.boards = response._embedded.data);
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      board: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.required]),
    });
  }

  protected handleOk(response) {
    this.router.navigate([`/unit/${response.id}/view`]);
  }

  onBoardChange() {
    this.typeService.findAllOnCreate(this.form.controls.board.value)
      .subscribe(response => this.types = response._embedded.data);
  }

  onTypeChange() {
    this.reasonService.findAllOnCreate(this.form.controls.board.value, this.form.controls.type.value)
      .subscribe(response => this.reasons = response._embedded.data);
  }

}
