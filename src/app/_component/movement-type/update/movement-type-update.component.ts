import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {MovementTypeService} from '../../../_service/movement/movement-type.service';

@Component({
  selector: 'app-movement-type-update',
  templateUrl: './movement-type-update.component.html',
  styleUrls: ['./movement-type-update.component.css']
})
export class MovementTypeUpdateComponent implements OnInit {

  id: number;
  form: FormGroup;
  errors: any;

  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private movementTypeService: MovementTypeService
  ) {
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
    });
  }

  onUpdate() {
    this.movementTypeService.update(this.id, this.form.value)
      .subscribe(
        response => {
          this.router.navigate(['/movement-type']);
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
