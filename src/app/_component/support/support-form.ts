import {FormGroup} from '@angular/forms';
import {Location} from '@angular/common';

export class SupportForm {

  protected form: FormGroup;
  protected errors: any;

  constructor(
    protected location: Location,
  ) {
  }

  onCancel() {
    this.location.back();
  }

  getError(field: string): string {
    return this.errors.filter(e => e.field !== undefined).filter(e => e.field === field).map(e => e.defaultMessage).join();
  }

  hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };

  protected handleOk(response) {
    console.log(response);
  }

  protected handleError(error) {
    if (error.error.errors !== undefined) {
      this.errors = error.error.errors
        .filter(e => e.field !== undefined)
        .filter(e => this.form.contains(e.field))
        .map(e => {
          this.form.controls[e.field].setErrors({incorrect: true});
          return e;
        });
    }
  }

}
