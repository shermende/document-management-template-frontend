import {Component, OnInit} from '@angular/core';
import {Translate} from '../../../_models/translate';
import {Location} from '@angular/common';
import {TranslateService} from '../../../_service/translate/translate.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {SupportFormUpdate} from '../../support/support-form-update';

@Component({
  selector: 'app-translate-update',
  templateUrl: './translate-update.component.html',
  styleUrls: ['./translate-update.component.css']
})
export class TranslateUpdateComponent extends SupportFormUpdate<Translate> implements OnInit {

  constructor(
    protected route: ActivatedRoute,
    protected location: Location,
    protected crudService: TranslateService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    super(route, location, crudService);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      locale: new FormControl('', [Validators.required]),
      key: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
    });
    // load data
    this.crudService.read(Number(this.route.snapshot.paramMap.get('id'))).subscribe(response => {
      this.form = this.formBuilder.group({
        locale: new FormControl(response.locale, [Validators.required]),
        key: new FormControl(response.key, [Validators.required]),
        value: new FormControl(response.value, [Validators.required]),
      });
    });
  }

  protected handleOk(response) {
    this.router.navigate(['/translate']);
  }

}
