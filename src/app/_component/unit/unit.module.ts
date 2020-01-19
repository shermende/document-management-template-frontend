import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UnitRoutingModule} from './unit-routing.module';
import {UnitPageComponent} from './unit-page/unit-page.component';
import {UnitCreateComponent} from './unit-create/unit-create.component';
import {UnitViewComponent} from './unit-view/unit-view.component';
import {MaterialModule} from '../../material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material';

@NgModule({
  declarations: [UnitPageComponent, UnitCreateComponent, UnitViewComponent],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        UnitRoutingModule,
        MatGridListModule
    ]
})
export class UnitModule {
}
