import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MovementTypeService} from '../../../_service/movement/movement-type.service';
import {MovementType} from '../../../_models/movement/movement-type';

@Component({
  selector: 'app-movement-type',
  templateUrl: './movement-type-create.component.html',
  styleUrls: ['./movement-type-create.component.css']
})
export class MovementTypeCreateComponent implements OnInit {
  form: FormGroup;
  error = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private movementTypeService: MovementTypeService
  ) {
  }

  ngOnInit() {
    this.form =
      this.formBuilder.group({title: ['', Validators.required]});
  }

  onSubmit() {
    this.movementTypeService.create(new MovementType(this.form.controls.title.value))
      .subscribe(
        response => {
          this.router.navigate(['/movement-type']);
        },
        error => {
          this.error = error.error.errors.map(e => e.defaultMessage).join();
        });
  }

}
