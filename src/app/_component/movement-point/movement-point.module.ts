import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MovementPointRoutingModule} from './movement-point-routing.module';
import {MovementPointCreateComponent} from './movement-point-create/movement-point-create.component';
import {MovementPointUpdateComponent} from './movement-point-update/movement-point-update.component';
import {MovementPointPageComponent} from './movement-point-page/movement-point-page.component';
import {MaterialModule} from '../../material.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [MovementPointCreateComponent, MovementPointUpdateComponent, MovementPointPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MovementPointRoutingModule
  ]
})
export class MovementPointModule {
}
