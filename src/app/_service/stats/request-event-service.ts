import {HttpClient} from '@angular/common/http';
import {SystemService} from '../system.service';
import {Injectable} from '@angular/core';
import {SupportHateoasService} from '../support/support-hateoas-service';

@Injectable({
  providedIn: 'root'
})
export class RequestEventService extends SupportHateoasService {

  constructor(
    protected http: HttpClient,
    protected systemService: SystemService
  ) {
    super(http, systemService.cassandraUrl(), 'request-event/default.default');
  }

}
