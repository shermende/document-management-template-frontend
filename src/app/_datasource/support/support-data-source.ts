import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {SupportCrudService} from '../../_service/support/support-crud-service';

export class SupportDataSource<M> implements DataSource<M> {

  protected movementTypesSubject = new BehaviorSubject<M[]>([]);
  protected total: number;

  constructor(
    protected service: SupportCrudService<M>
  ) {
  }

  connect(collectionViewer: CollectionViewer): Observable<M[] | ReadonlyArray<M>> {
    return this.movementTypesSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.movementTypesSubject.complete();
  }

  page(page: number = 0, size: number = 10, sort: string = 'id', direction: string = 'desc', params: string = '') {
    this.service.page(page, size, sort, direction, params)
      .subscribe(response => {
          if (response._embedded === undefined) {
            this.total = 0;
            this.movementTypesSubject.next([]);
            return;
          }
          this.total = response.page.totalElements;
          this.movementTypesSubject.next(response._embedded.data);
        },
        error => {
          console.log(error);
        });
  }

  getTotal(): number {
    return this.total;
  }

}
