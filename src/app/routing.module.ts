import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from './_guard/auth.guard';
import {HomeComponent} from './_component/home/home.component';
import {LoginComponent} from './_component/login/login.component';
import {RegistrationComponent} from './_component/registration/registration.component';
import {MovementTypePageComponent} from './_component/movement-type/page/movement-type-page.component';
import {MovementTypeCreateComponent} from './_component/movement-type/create/movement-type-create.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'movement-type', component: MovementTypePageComponent, canActivate: [AuthGuard]},
  {path: 'movement-type/create', component: MovementTypeCreateComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
