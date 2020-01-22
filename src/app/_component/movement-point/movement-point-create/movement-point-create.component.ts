import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {SupportFormCreate} from '../../support/support-form-create';
import {MovementPoint} from '../../../_models/movement/movement-point';
import {MovementPointService} from '../../../_service/movement/movement-point.service';

@Component({
  selector: 'app-movement-point-create',
  templateUrl: './movement-point-create.component.html',
  styleUrls: ['./movement-point-create.component.css']
})
export class MovementPointCreateComponent extends SupportFormCreate<MovementPoint> implements OnInit {

  form: FormGroup;
  errors: any;

  constructor(
    protected location: Location,
    protected crudService: MovementPointService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    super(location, crudService);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  protected handleOk(response) {
    this.router.navigate(['/movement-point']);
  }

}
