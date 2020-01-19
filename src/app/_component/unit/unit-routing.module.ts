import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../_guard/auth.guard';
import {UnitViewComponent} from './unit-view/unit-view.component';
import {UnitCreateComponent} from './unit-create/unit-create.component';
import {UnitPageComponent} from './unit-page/unit-page.component';

const routes: Routes = [
  {path: '', component: UnitPageComponent, canActivate: [AuthGuard]},
  {path: 'create', component: UnitCreateComponent, canActivate: [AuthGuard]},
  {path: ':id/view', component: UnitViewComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitRoutingModule {
}
