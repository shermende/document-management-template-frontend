import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../_guard/auth.guard';
import {MovementReasonPageComponent} from './movement-reason-page/movement-reason-page.component';
import {MovementReasonCreateComponent} from './movement-reason-create/movement-reason-create.component';

const routes: Routes = [
  {path: '', component: MovementReasonPageComponent, canActivate: [AuthGuard]},
  {path: 'create', component: MovementReasonCreateComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovementReasonRoutingModule {
}
