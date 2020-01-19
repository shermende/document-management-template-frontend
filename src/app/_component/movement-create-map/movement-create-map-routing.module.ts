import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../_guard/auth.guard';
import {MovementCreateMapPageComponent} from './movement-create-map-page/movement-create-map-page.component';
import {MovementCreateMapCreateComponent} from './movement-create-map-create/movement-create-map-create.component';
import {MovementCreateMapUpdateComponent} from './movement-create-map-update/movement-create-map-update.component';

const routes: Routes = [
  {path: '', component: MovementCreateMapPageComponent, canActivate: [AuthGuard]},
  {path: 'create', component: MovementCreateMapCreateComponent, canActivate: [AuthGuard]},
  {path: ':id/update', component: MovementCreateMapUpdateComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovementCreateMapRoutingModule {
}
