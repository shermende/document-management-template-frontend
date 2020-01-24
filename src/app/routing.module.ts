import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './_component/layout/auth/auth.component';
import {CommonComponent} from './_component/layout/common/common.component';
import {MovementComponent} from './_component/layout/movement/movement.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./_component/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'unit',
    component: CommonComponent,
    loadChildren: () => import('./_component/unit/unit.module').then(m => m.UnitModule)
  },
  {
    path: 'movement-board',
    component: MovementComponent,
    loadChildren: () => import('./_component/movement-board/movement-board.module').then(m => m.MovementBoardModule)
  },
  {
    path: 'movement-type',
    component: MovementComponent,
    loadChildren: () => import('./_component/movement-type/movement-type.module').then(m => m.MovementTypeModule)
  },
  {
    path: 'movement-reason',
    component: MovementComponent,
    loadChildren: () => import('./_component/movement-reason/movement-reason.module').then(m => m.MovementReasonModule)
  },
  {
    path: 'movement-point',
    component: MovementComponent,
    loadChildren: () => import('./_component/movement-point/movement-point.module').then(m => m.MovementPointModule)
  },
  {
    path: 'movement-create-map',
    component: MovementComponent,
    loadChildren: () => import('./_component/movement-create-map/movement-create-map.module').then(m => m.MovementCreateMapModule)
  },
  {
    path: 'movement-jump-map',
    component: MovementComponent,
    loadChildren: () => import('./_component/movement-jump-map/movement-jump-map.module').then(m => m.MovementJumpMapModule)
  },
  {
    path: 'movement-map',
    component: MovementComponent,
    loadChildren: () => import('./_component/movement-map/movement-map.module').then(m => m.MovementMapModule)
  },
  {
    path: 'translate',
    component: MovementComponent,
    loadChildren: () => import('./_component/translate/translate.module').then(m => m.TranslateModule)
  },

  // otherwise redirect to home
  {path: '**', redirectTo: '/unit'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
