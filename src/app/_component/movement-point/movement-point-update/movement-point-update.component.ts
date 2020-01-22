import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {SupportFormUpdate} from '../../support/support-form-update';
import {MovementPoint} from '../../../_models/movement/movement-point';
import {MovementPointService} from '../../../_service/movement/movement-point.service';

@Component({
  selector: 'app-movement-point-update',
  templateUrl: './movement-point-update.component.html',
  styleUrls: ['./movement-point-update.component.css']
})
export class MovementPointUpdateComponent extends SupportFormUpdate<MovementPoint> implements OnInit {

  id: number;

  constructor(
    protected route: ActivatedRoute,
    protected location: Location,
    protected crudService: MovementPointService,
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
    this.router.navigate(['/movement-point']);
  }

}
