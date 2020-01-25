import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {HateoasPage} from '../../_models/hateoas/hateoas-page';
import {SupportHateoasService} from '../../_service/support/support-hateoas-service';

export class SupportHateoasDataSource<M> implements DataSource<M> {

  private _page: HateoasPage<M>;
  protected content = new BehaviorSubject<M[]>([]);

  constructor(
    protected service: SupportHateoasService
  ) {
  }


  get page(): HateoasPage<M> {
    return this._page;
  }

  connect(collectionViewer: CollectionViewer): Observable<M[] | ReadonlyArray<M>> {
    return this.content.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.content.complete();
  }

  home() {
    this.service.home()
      .subscribe(response => {
          this.extracted(response);
        },
        error => {
          console.log(error);
        });
  }

  prev() {
    console.log(this._page._links);
    this.service.page(this._page._links.prev.href)
      .subscribe(response => {
          this.extracted(response);
        },
        error => {
          console.log(error);
        });
  }

  next() {
    console.log(this._page._links);
    this.service.page(this._page._links.next.href)
      .subscribe(response => {
          this.extracted(response);
        },
        error => {
          console.log(error);
        });
  }

  hasPrev(): boolean {
    return this._page._links.prev !== undefined;
  }

  hasNext(): boolean {
    return this._page._links.next !== undefined;
  }

  private extracted(response) {
    if (response._embedded === undefined) {
      this.content.next([]);
      return;
    }
    console.log(response);
    this._page = response;
    this.content.next(response._embedded.data);
  }

}
