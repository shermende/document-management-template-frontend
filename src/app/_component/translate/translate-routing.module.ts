import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../_guard/auth.guard';
import {TranslatePageComponent} from './translate-page/translate-page.component';
import {TranslateCreateComponent} from './translate-create/translate-create.component';
import {TranslateUpdateComponent} from './translate-update/translate-update.component';

const routes: Routes = [
  {path: '', component: TranslatePageComponent, canActivate: [AuthGuard]},
  {path: 'create', component: TranslateCreateComponent, canActivate: [AuthGuard]},
  {path: ':id/update', component: TranslateUpdateComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranslateRoutingModule {
}
