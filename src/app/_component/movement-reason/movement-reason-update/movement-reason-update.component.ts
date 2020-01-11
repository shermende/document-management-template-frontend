import {Component, OnInit} from '@angular/core';
import {SupportFormUpdate} from '../../support/support-form-update';
import {Location} from '@angular/common';
import {MovementReasonService} from '../../../_service/movement/movement-reason.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MovementTypeService} from '../../../_service/movement/movement-type.service';
import {MovementReason} from '../../../_models/movement/movement-reason';
import {MovementType} from '../../../_models/movement/movement-type';

@Component({
  selector: 'app-movement-reason-update',
  templateUrl: './movement-reason-update.component.html',
  styleUrls: ['./movement-reason-update.component.css']
})
export class MovementReasonUpdateComponent extends SupportFormUpdate<MovementReason> implements OnInit {

  id: number;
  type: MovementType;
  types: MovementType[];

  constructor(
    protected route: ActivatedRoute,
    protected location: Location,
    protected crudService: MovementReasonService,
    private router: Router,
    private formBuilder: FormBuilder,
    private typeService: MovementTypeService
  ) {
    super(route, location, crudService);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    });
    this.typeService.page(0, 999).subscribe(response => this.types = response._embedded.data);
    this.crudService.read(Number(this.route.snapshot.paramMap.get('id'))).subscribe(response => {
      this.form = this.formBuilder.group({
        title: new FormControl(response.title, [Validators.required]),
        type: new FormControl(response.type.id, [Validators.required]),
      });
    });
  }

  protected handleOk(response) {
    this.router.navigate(['/movement-reason']);
  }

}
