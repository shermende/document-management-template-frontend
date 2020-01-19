import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AuthInterceptor} from './_interceptor/auth-interceptor';
import {RoutingModule} from './routing.module';
import {MovementTypeModule} from './_component/movement-type/movement-type.module';
import {MovementReasonModule} from './_component/movement-reason/movement-reason.module';
import {MovementPointModule} from './_component/movement-point/movement-point.module';

import {AppComponent} from './_component/app/app.component';
import {HomeComponent} from './_component/home/home.component';
import {LoginComponent} from './_component/login/login.component';
import {RegistrationComponent} from './_component/registration/registration.component';
import {HeaderComponent} from './_component/layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    MaterialModule,
    RoutingModule,
    MovementTypeModule,
    MovementReasonModule,
    MovementPointModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
