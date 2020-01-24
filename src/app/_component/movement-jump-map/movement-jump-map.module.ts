import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MovementJumpMapRoutingModule} from './movement-jump-map-routing.module';
import {MovementJumpMapPageComponent} from './movement-jump-map-page/movement-jump-map-page.component';
import {MaterialModule} from '../../material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MovementJumpMapUpdateComponent} from './movement-jump-map-update/movement-jump-map-update.component';
import {MovementJumpMapCreateComponent} from './movement-jump-map-create/movement-jump-map-create.component';


@NgModule({
  declarations: [MovementJumpMapPageComponent, MovementJumpMapUpdateComponent, MovementJumpMapCreateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MovementJumpMapRoutingModule
  ]
})
export class MovementJumpMapModule {
}
