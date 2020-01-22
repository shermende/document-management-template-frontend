import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UnitRoutingModule} from './unit-routing.module';
import {UnitPageComponent} from './unit-page/unit-page.component';
import {UnitCreateComponent} from './unit-create/unit-create.component';
import {UnitViewComponent} from './unit-view/unit-view.component';
import {MaterialModule} from '../../material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material';
import {UnitHistoryComponent} from './unit-history/unit-history.component';

@NgModule({
  declarations: [UnitPageComponent, UnitCreateComponent, UnitViewComponent, UnitHistoryComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    UnitRoutingModule,
    MatGridListModule,
  ]
})
export class UnitModule {
}
