import {Location} from '@angular/common';
import {SupportForm} from './support-form';
import {SupportCrudService} from '../../_service/support-crud-service';
import {ActivatedRoute} from '@angular/router';

export class SupportFormUpdate<R> extends SupportForm {

  constructor(
    protected route: ActivatedRoute,
    protected location: Location,
    protected crudService: SupportCrudService<R>
  ) {
    super(location);
  }

  onUpdate() {
    this.crudService.update(Number(this.route.snapshot.paramMap.get('id')), this.getResource())
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
