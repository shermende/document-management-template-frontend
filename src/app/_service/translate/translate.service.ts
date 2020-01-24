import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SystemService} from '../system.service';
import {SupportCrudService} from '../support-crud-service';
import {Translate} from '../../_models/translate';

@Injectable({
  providedIn: 'root'
})
export class TranslateService extends SupportCrudService<Translate> {

  constructor(
    http: HttpClient,
    systemService: SystemService
  ) {
    super(http, systemService, 'translate');
  }

}
