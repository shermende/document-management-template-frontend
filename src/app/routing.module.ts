import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from './_guard/auth.guard';
import {HomeComponent} from './_component/home/home.component';
import {LoginComponent} from './_component/login/login.component';
import {RegistrationComponent} from './_component/registration/registration.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}, // open
  {path: 'registration', component: RegistrationComponent}, // open
  {
    path: 'movement-board',
    loadChildren: () => import('./_component/movement-board/movement-board.module').then(m => m.MovementBoardModule)
  },
  {
    path: 'movement-type',
    loadChildren: () => import('./_component/movement-type/movement-type.module').then(m => m.MovementTypeModule)
  },
  {
    path: 'movement-reason',
    loadChildren: () => import('./_component/movement-reason/movement-reason.module').then(m => m.MovementReasonModule)
  },
  {
    path: 'movement-point',
    loadChildren: () => import('./_component/movement-point/movement-point.module').then(m => m.MovementPointModule)
  },
  {
    path: 'movement-create-map',
    loadChildren: () => import('./_component/movement-create-map/movement-create-map.module').then(m => m.MovementCreateMapModule)
  },
  {
    path: 'movement-map',
    loadChildren: () => import('./_component/movement-map/movement-map.module').then(m => m.MovementMapModule)
  },
  {
    path: 'unit',
    loadChildren: () => import('./_component/unit/unit.module').then(m => m.UnitModule)
  },

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
