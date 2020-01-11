import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MovementReasonRoutingModule} from './movement-reason-routing.module';
import {MovementReasonPageComponent} from './movement-reason-page/movement-reason-page.component';
import {MaterialModule} from '../../material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { MovementReasonCreateComponent } from './movement-reason-create/movement-reason-create.component';
import { MovementReasonUpdateComponent } from './movement-reason-update/movement-reason-update.component';

@NgModule({
  declarations: [
    MovementReasonPageComponent,
    MovementReasonCreateComponent,
    MovementReasonUpdateComponent
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
