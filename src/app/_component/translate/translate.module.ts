import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateRoutingModule } from './translate-routing.module';
import { TranslateCreateComponent } from './translate-create/translate-create.component';
import { TranslateUpdateComponent } from './translate-update/translate-update.component';
import { TranslatePageComponent } from './translate-page/translate-page.component';
import {MaterialModule} from '../../material.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [TranslateCreateComponent, TranslateUpdateComponent, TranslatePageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateRoutingModule
  ]
})
export class TranslateModule { }
