import {Component, OnInit} from '@angular/core';
import {SupportFormUpdate} from '../../support/support-form-update';
import {Location} from '@angular/common';
import {MovementReasonService} from '../../../_service/movement/movement-reason.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MovementReason} from '../../../_models/movement/movement-reason';

@Component({
  selector: 'app-movement-reason-update',
  templateUrl: './movement-reason-update.component.html',
  styleUrls: ['./movement-reason-update.component.css']
})
export class MovementReasonUpdateComponent extends SupportFormUpdate<MovementReason> implements OnInit {

  id: number;

  constructor(
    protected route: ActivatedRoute,
    protected location: Location,
    protected crudService: MovementReasonService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    super(route, location, crudService);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
    // load data
    this.crudService.read(Number(this.route.snapshot.paramMap.get('id'))).subscribe(response => {
      this.form = this.formBuilder.group({
        title: new FormControl(response.title, [Validators.required]),
        description: new FormControl(response.description, [Validators.required]),
      });
    });
  }

  protected handleOk(response) {
    this.router.navigate(['/movement-reason']);
  }

}
