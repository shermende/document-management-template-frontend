import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './_component/app/app.component';
import {RoutingModule} from './routing.module';
import {HomeComponent} from './_component/home/home.component';
import {LoginComponent} from './_component/login/login.component';
import {RegistrationComponent} from './_component/registration/registration.component';
import {MovementTypeCreateComponent} from './_component/movement-type/create/movement-type-create.component';
import {MovementTypePageComponent} from './_component/movement-type/page/movement-type-page.component';
import {AuthInterceptor} from './_interceptor/auth-interceptor';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    MovementTypeCreateComponent,
    MovementTypePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    RoutingModule,
    MaterialModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
