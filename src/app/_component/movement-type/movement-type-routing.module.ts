import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../_guard/auth.guard';
import {MovementTypePageComponent} from './page/movement-type-page.component';
import {MovementTypeCreateComponent} from './create/movement-type-create.component';
import {MovementTypeUpdateComponent} from './update/movement-type-update.component';

const routes: Routes = [
  {path: '', component: MovementTypePageComponent, canActivate: [AuthGuard]},
  {path: 'create', component: MovementTypeCreateComponent, canActivate: [AuthGuard]},
  {path: ':id/update', component: MovementTypeUpdateComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovementTypeRoutingModule {
}
