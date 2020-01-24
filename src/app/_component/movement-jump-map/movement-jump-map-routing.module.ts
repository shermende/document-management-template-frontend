import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../_guard/auth.guard';
import {MovementJumpMapPageComponent} from './movement-jump-map-page/movement-jump-map-page.component';
import {MovementJumpMapCreateComponent} from './movement-jump-map-create/movement-jump-map-create.component';
import {MovementJumpMapUpdateComponent} from './movement-jump-map-update/movement-jump-map-update.component';

const routes: Routes = [
  {path: '', component: MovementJumpMapPageComponent, canActivate: [AuthGuard]},
  {path: 'create', component: MovementJumpMapCreateComponent, canActivate: [AuthGuard]},
  {path: ':id/update', component: MovementJumpMapUpdateComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovementJumpMapRoutingModule {
}
