import {Component, OnInit} from '@angular/core';
import {SupportFormCreate} from '../../support/support-form-create';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {TranslateService} from '../../../_service/translate/translate.service';
import {Translate} from '../../../_models/translate';

@Component({
  selector: 'app-translate-create',
  templateUrl: './translate-create.component.html',
  styleUrls: ['./translate-create.component.css']
})
export class TranslateCreateComponent extends SupportFormCreate<Translate> implements OnInit {

  constructor(
    protected location: Location,
    protected crudService: TranslateService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    super(location, crudService);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      locale: new FormControl('', [Validators.required]),
      key: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
    });
  }

  protected handleOk(response) {
    this.router.navigate(['/translate']);
  }

}
