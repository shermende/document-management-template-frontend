import {Location} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MovementTypeService} from '../../../_service/movement/movement-type.service';


@Component({
  selector: 'app-movement-type',
  templateUrl: './movement-type-create.component.html',
  styleUrls: ['./movement-type-create.component.css']
})
export class MovementTypeCreateComponent implements OnInit {
  form: FormGroup;
  errors: any;

  constructor(
    private router: Router,
    private location: Location,
    private formBuilder: FormBuilder,
    private movementTypeService: MovementTypeService
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.movementTypeService.create(this.form.value)
      .subscribe(
        response => {
          this.router.navigate(['/movement-type']);
        },
        error => {
          if (error.error.errors !== undefined) {
            this.errors = error.error.errors
              .filter(e => e.field !== undefined)
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
