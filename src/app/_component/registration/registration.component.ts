import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthenticationService} from '../../_service/authentication.service';
import {SupportForm} from '../support/support-form';
import {Location} from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent extends SupportForm implements OnInit {

  constructor(
    protected location: Location,
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    super(location);
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
        response => {
          this.router.navigate(['/login']);
        },
        error => {
          this.handleError(error);
        });
  }

}
