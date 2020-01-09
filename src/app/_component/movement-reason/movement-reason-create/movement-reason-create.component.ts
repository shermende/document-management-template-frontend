import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {MovementReasonService} from '../../../_service/movement/movement-reason.service';
import {MatSelect} from '@angular/material';

@Component({
  selector: 'app-movement-reason-create',
  templateUrl: './movement-reason-create.component.html',
  styleUrls: ['./movement-reason-create.component.css']
})
export class MovementReasonCreateComponent implements OnInit {

  select: MatSelect;
  form: FormGroup;
  errors: any;

  constructor(
    private router: Router,
    private location: Location,
    private formBuilder: FormBuilder,
    private service: MovementReasonService
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    });
  }

  onCreate() {
    this.service.create(this.form.value)
      .subscribe(
        response => {
          this.router.navigate(['/movement-reason']);
        },
        error => {
          if (error.error.errors !== undefined) {
            this.errors = error.error.errors
              .filter(e => e.field !== undefined)
              .filter(e => this.form.contains(e.field))
              .map(e => {
                this.form.controls[e.field].setErrors({incorrect: true});
                return e;
              });
          }
        });
  }

  onCancel() {
    this.location.back();
  }

  getError(field: string): string {
    return this.errors.filter(e => e.field !== undefined).filter(e => e.field === field).map(e => e.defaultMessage).join();
  }

  hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

}
