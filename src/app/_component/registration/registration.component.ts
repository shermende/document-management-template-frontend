import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthenticationService} from '../../_service/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  error = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.form =
      this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  onSubmit() {
    this.authenticationService.registration(this.form.controls.username.value, this.form.controls.password.value)
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {
          this.error = error.error.errors.map(e => e.defaultMessage).join();
        });
  }

}
