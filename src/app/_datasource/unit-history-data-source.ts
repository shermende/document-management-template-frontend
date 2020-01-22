import {UnitService} from '../_service/unit/unit.service';
import {SupportDataSource} from './support-data-source';
import {Unit} from '../_models/unit';

export class UnitHistoryDataSource extends SupportDataSource<Unit> {

  constructor(
    protected service: UnitService
  ) {
    super(service);
  }

  history(id: number, page: number = 0, size: number = 10, sort: string = 'id', direction: string = 'desc') {
    this.service.history(id, page, size, sort, direction)
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

}
