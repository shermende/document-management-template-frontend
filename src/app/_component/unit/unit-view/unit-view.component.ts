import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MovementReason} from '../../../_models/movement/movement-reason';
import {UnitService} from '../../../_service/unit/unit.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Unit} from '../../../_models/unit';
import {MovementReasonService} from '../../../_service/movement/movement-reason.service';

@Component({
  selector: 'app-unit-view',
  templateUrl: './unit-view.component.html',
  styleUrls: ['./unit-view.component.css']
})
export class UnitViewComponent implements OnInit {

  protected form: FormGroup;
  protected errors: any;
  id: number;
  unit: Unit;
  reasons: MovementReason[];

  constructor(
    protected route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private reasonService: MovementReasonService,
    private unitService: UnitService
  ) {
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.form = this.formBuilder.group({
      reason: new FormControl('', [Validators.required]),
    });
    // load data
    this.unitService.read(this.id).subscribe(response => this.reload(response));
  }

  onMove() {
    this.unitService.move(this.id, this.form.value).subscribe(response => this.reload(response));
  }

  private reload(response) {
    this.reasons = [];
    this.form.reset();
    this.unit = response;
    this.reasonService.findAllOnMove(this.unit.board.id, this.unit.type.id, this.unit.point.id)
      .subscribe(response => {
        this.reasons = response._embedded.data;
      });
  }

}
