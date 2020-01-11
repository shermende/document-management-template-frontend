import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {MovementReasonService} from '../../../_service/movement/movement-reason.service';
import {MovementType} from '../../../_models/movement/movement-type';
import {MovementTypeService} from '../../../_service/movement/movement-type.service';
import {SupportFormCreate} from '../../support/support-form-create';
import {MovementReason} from '../../../_models/movement/movement-reason';

@Component({
  selector: 'app-movement-reason-create',
  templateUrl: './movement-reason-create.component.html',
  styleUrls: ['./movement-reason-create.component.css']
})
export class MovementReasonCreateComponent extends SupportFormCreate<MovementReason> implements OnInit {

  types: MovementType[];
  form: FormGroup;
  errors: any;

  constructor(
    protected location: Location,
    protected crudService: MovementReasonService,
    private router: Router,
    private formBuilder: FormBuilder,
    private typeService: MovementTypeService
  ) {
    super(location, crudService);
  }

  ngOnInit() {
    this.typeService.page(0, 999).subscribe(response => this.types = response._embedded.data);
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    });
  }

  protected handleOk(response) {
    this.router.navigate(['/movement-reason']);
  }

}
