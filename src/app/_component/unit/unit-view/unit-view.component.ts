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

  form: FormGroup;
  errors: any;
  id: number;
  unit: Unit;
  reasons: MovementReason[];
  unitForm: FormGroup;

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
    //
    this.unitForm = this.formBuilder.group({
      pointTitle: new FormControl(''),
      pointDescription: new FormControl(''),
      reasonTitle: new FormControl(''),
      reasonDescription: new FormControl(''),
    });
  }

  onMove() {
    this.unitService.move(this.id, this.form.value).subscribe(response => this.reload(response));
  }

  history() {
    this.router.navigate([`/unit/${this.id}/history`]);
  }

  private reload(response) {
    this.form.reset();
    this.reasons = [];
    this.unit = response;
    this.unitForm = this.formBuilder.group({
      pointTitle: this.unit.point.title,
      pointDescription: this.unit.point.description,
      reasonTitle: this.unit.reason.title,
      reasonDescription: this.unit.reason.description,
    });
    this.reasonService.findAllOnMove(this.unit.board.id, this.unit.type.id, this.unit.point.id)
      .subscribe(response => {
        this.reasons = response._embedded.data;
      });
  }

}
