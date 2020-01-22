import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MovementBoardRoutingModule} from './movement-board-routing.module';
import {MovementBoardPageComponent} from './movement-board-page/movement-board-page.component';
import {MovementBoardCreateComponent} from './movement-board-create/movement-board-create.component';
import {MovementBoardUpdateComponent} from './movement-board-update/movement-board-update.component';
import {MaterialModule} from '../../material.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [MovementBoardPageComponent, MovementBoardCreateComponent, MovementBoardUpdateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MovementBoardRoutingModule
  ]
})
export class MovementBoardModule {
}
