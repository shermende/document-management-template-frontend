import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../_guard/auth.guard';
import {MovementBoardUpdateComponent} from './movement-board-update/movement-board-update.component';
import {MovementBoardCreateComponent} from './movement-board-create/movement-board-create.component';
import {MovementBoardPageComponent} from './movement-board-page/movement-board-page.component';

const routes: Routes = [
  {path: '', component: MovementBoardPageComponent, canActivate: [AuthGuard]},
  {path: 'create', component: MovementBoardCreateComponent, canActivate: [AuthGuard]},
  {path: ':id/update', component: MovementBoardUpdateComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovementBoardRoutingModule {
}
