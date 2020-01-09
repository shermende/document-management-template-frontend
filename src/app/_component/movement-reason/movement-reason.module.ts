import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MovementReasonRoutingModule} from './movement-reason-routing.module';
import {MovementReasonPageComponent} from './movement-reason-page/movement-reason-page.component';
import {MaterialModule} from '../../material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { MovementReasonCreateComponent } from './movement-reason-create/movement-reason-create.component';

@NgModule({
  declarations: [
    MovementReasonPageComponent,
    MovementReasonCreateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MovementReasonRoutingModule
  ]
})
export class MovementReasonModule {
}
