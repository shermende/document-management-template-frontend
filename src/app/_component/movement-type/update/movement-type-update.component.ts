import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {MovementTypeService} from '../../../_service/movement/movement-type.service';
import {MovementType} from '../../../_models/movement/movement-type';
import {SupportFormUpdate} from '../../support/support-form-update';

@Component({
  selector: 'app-movement-type-update',
  templateUrl: './movement-type-update.component.html',
  styleUrls: ['./movement-type-update.component.css']
})
export class MovementTypeUpdateComponent extends SupportFormUpdate<MovementType> implements OnInit {

  constructor(
    protected route: ActivatedRoute,
    protected location: Location,
    protected crudService: MovementTypeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    super(route, location, crudService);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
    });
    this.crudService.read(Number(this.route.snapshot.paramMap.get('id'))).subscribe(response => {
      this.form = this.formBuilder.group({
        title: new FormControl(response.title, [Validators.required]),
      });
    });
  }

  protected handleOk(response) {
    this.router.navigate(['/movement-type']);
  }

}
