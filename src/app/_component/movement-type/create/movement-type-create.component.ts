import {Location} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MovementTypeService} from '../../../_service/movement/movement-type.service';
import {MovementType} from '../../../_models/movement/movement-type';
import {SupportFormCreate} from '../../support/support-form-create';


@Component({
  selector: 'app-movement-type',
  templateUrl: './movement-type-create.component.html',
  styleUrls: ['./movement-type-create.component.css']
})
export class MovementTypeCreateComponent extends SupportFormCreate<MovementType> implements OnInit {

  constructor(
    protected router: Router,
    protected location: Location,
    protected formBuilder: FormBuilder,
    protected crudService: MovementTypeService
  ) {
    super(location, crudService);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
    });
  }

  protected handleOk(response) {
    this.router.navigate(['/movement-type']);
  }

}
