import {Location} from '@angular/common';
import {SupportForm} from './support-form';
import {SupportCrudService} from '../../_service/support-crud-service';

export class SupportFormCreate<R> extends SupportForm {

  constructor(
    protected location: Location,
    protected crudService: SupportCrudService<R>
  ) {
    super(location);
  }

  onCreate() {
    this.crudService.create(this.getResource())
      .subscribe(
        response => {
          this.handleOk(response);
        },
        error => {
          this.handleError(error);
        });
  }

  protected getResource() {
    return this.form.value;
  }

}
