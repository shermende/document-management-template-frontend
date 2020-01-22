import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MovementCreateMapRoutingModule} from './movement-create-map-routing.module';
import {MovementCreateMapPageComponent} from './movement-create-map-page/movement-create-map-page.component';
import {MovementCreateMapCreateComponent} from './movement-create-map-create/movement-create-map-create.component';
import {MovementCreateMapUpdateComponent} from './movement-create-map-update/movement-create-map-update.component';
import {MaterialModule} from '../../material.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [MovementCreateMapPageComponent, MovementCreateMapCreateComponent, MovementCreateMapUpdateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MovementCreateMapRoutingModule
  ]
})
export class MovementCreateMapModule {
}
