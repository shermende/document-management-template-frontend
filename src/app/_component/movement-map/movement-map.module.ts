import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MovementMapRoutingModule} from './movement-map-routing.module';
import {MovementMapPageComponent} from './movement-map-page/movement-map-page.component';
import {MovementMapCreateComponent} from './movement-map-create/movement-map-create.component';
import {MovementMapUpdateComponent} from './movement-map-update/movement-map-update.component';
import {MaterialModule} from '../../material.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [MovementMapPageComponent, MovementMapCreateComponent, MovementMapUpdateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MovementMapRoutingModule
  ]
})
export class MovementMapModule {
}
