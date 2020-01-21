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
import {LoginComponent} from './_component/login/login.component';
import {RegistrationComponent} from './_component/registration/registration.component';
import {HeaderComponent} from './_component/layout/header/header.component';
import {UnitModule} from './_component/unit/unit.module';
import {ErrorInterceptor} from './_interceptor/error-interceptor';
import {ErrorAccessDeniedComponent} from './_component/dialog/error/error-access-denied/error-access-denied.component';
import {ErrorUnauthorizedComponent} from './_component/dialog/error/error-unauthorized/error-unauthorized.component';
import {ErrorCommonComponent} from './_component/dialog/error/error-common/error-common.component';
import {ErrorLoginComponent} from './_component/dialog/error/error-login/error-login.component';
import {LocaleInterceptor} from './_interceptor/locale-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    ErrorLoginComponent,
    ErrorAccessDeniedComponent,
    ErrorUnauthorizedComponent,
    ErrorCommonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    MaterialModule,
    RoutingModule,
    UnitModule,
    MovementTypeModule,
    MovementReasonModule,
    MovementPointModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LocaleInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  exports: [
    HeaderComponent
  ],
  entryComponents: [
    ErrorLoginComponent,
    ErrorAccessDeniedComponent,
    ErrorUnauthorizedComponent,
    ErrorCommonComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
