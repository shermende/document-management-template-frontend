import {Component, OnInit} from '@angular/core';
import {RequestEventService} from '../../../_service/stats/request-event-service';
import {RequestEvent} from '../../../_models/request-event';
import {SupportHateoasDataSource} from '../../../_datasource/support/support-hateoas-data-source';

@Component({
  selector: 'app-request-event',
  templateUrl: './request-event.component.html',
  styleUrls: ['./request-event.component.css']
})
export class RequestEventComponent implements OnInit {

  readonly displayedColumns = ['bucket', 'ts', 'path', 'time'];
  dataSource: SupportHateoasDataSource<RequestEvent>;

  constructor(
    private service: RequestEventService
  ) {
  }

  ngOnInit() {
    this.dataSource = new SupportHateoasDataSource<RequestEvent>(this.service);
    this.dataSource.home();
  }

}
