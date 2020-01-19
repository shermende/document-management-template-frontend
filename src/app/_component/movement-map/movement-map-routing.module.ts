import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../_guard/auth.guard';
import {MovementMapCreateComponent} from './movement-map-create/movement-map-create.component';
import {MovementMapUpdateComponent} from './movement-map-update/movement-map-update.component';
import {MovementMapPageComponent} from './movement-map-page/movement-map-page.component';

const routes: Routes = [
  {path: '', component: MovementMapPageComponent, canActivate: [AuthGuard]},
  {path: 'create', component: MovementMapCreateComponent, canActivate: [AuthGuard]},
  {path: ':id/update', component: MovementMapUpdateComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovementMapRoutingModule {
}
