import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LocaleInterceptor} from './_interceptor/locale-interceptor';
import {AuthInterceptor} from './_interceptor/auth-interceptor';
import {ErrorInterceptor} from './_interceptor/error-interceptor';

import {AppComponent} from './_component/app/app.component';
import {CommonComponent} from './_component/layout/common/common.component';
import {HeaderComponent} from './_component/layout-parts/header/header.component';

import {ErrorAccessDeniedComponent} from './_component/dialog/error/error-access-denied/error-access-denied.component';
import {ErrorUnauthorizedComponent} from './_component/dialog/error/error-unauthorized/error-unauthorized.component';
import {ErrorCommonComponent} from './_component/dialog/error/error-common/error-common.component';
import {ErrorLoginComponent} from './_component/dialog/error/error-login/error-login.component';

import {RoutingModule} from './routing.module';
import {UnitModule} from './_component/unit/unit.module';
import {MovementTypeModule} from './_component/movement-type/movement-type.module';
import {MovementReasonModule} from './_component/movement-reason/movement-reason.module';
import {MovementPointModule} from './_component/movement-point/movement-point.module';
import {AuthModule} from './_component/auth/auth.module';
import {MovementCreateMapModule} from './_component/movement-create-map/movement-create-map.module';
import {MovementMapModule} from './_component/movement-map/movement-map.module';
import {MovementJumpMapModule} from './_component/movement-jump-map/movement-jump-map.module';
import {TranslateModule} from './_component/translate/translate.module';
import {MovementHeaderComponent} from './_component/layout-parts/movement-header/movement-header.component';
import {MovementComponent} from './_component/layout/movement/movement.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    MovementComponent,
    HeaderComponent,
    MovementHeaderComponent,
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
    AuthModule,
    UnitModule,
    MovementTypeModule,
    MovementReasonModule,
    MovementPointModule,
    MovementCreateMapModule,
    MovementJumpMapModule,
    MovementMapModule,
    TranslateModule,
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
