import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StatsRoutingModule} from './stats-routing.module';
import {RequestEventComponent} from './request-event/request-event.component';
import {MaterialModule} from '../../material.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [RequestEventComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    StatsRoutingModule
  ]
})
export class StatsModule {
}
