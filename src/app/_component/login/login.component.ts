import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthenticationService} from '../../_service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  onSubmit(): void {
    this.authenticationService.login(this.form.controls.username.value, this.form.controls.password.value)
      .subscribe(
        data => {
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
          this.error = error.error.errors.map(e => e.defaultMessage).join();
        });
  }

  redirectToRegistration(): string {
    return '/registration';
  }

}
