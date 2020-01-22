import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../_guard/auth.guard';
import {MovementPointCreateComponent} from './movement-point-create/movement-point-create.component';
import {MovementPointUpdateComponent} from './movement-point-update/movement-point-update.component';
import {MovementPointPageComponent} from './movement-point-page/movement-point-page.component';

const routes: Routes = [
  {path: '', component: MovementPointPageComponent, canActivate: [AuthGuard]},
  {path: 'create', component: MovementPointCreateComponent, canActivate: [AuthGuard]},
  {path: ':id/update', component: MovementPointUpdateComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovementPointRoutingModule {
}
