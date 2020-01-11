import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../material.module';

import {MovementTypeRoutingModule} from './movement-type-routing.module';
import {MovementTypePageComponent} from './page/movement-type-page.component';
import {MovementTypeCreateComponent} from './create/movement-type-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MovementTypeUpdateComponent } from './update/movement-type-update.component';

@NgModule({
  declarations: [
    MovementTypePageComponent,
    MovementTypeCreateComponent,
    MovementTypeUpdateComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MovementTypeRoutingModule,
  ]
})
export class MovementTypeModule {
}
