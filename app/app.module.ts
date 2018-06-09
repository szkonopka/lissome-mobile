import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthenticationService } from './core/services/authentication.service';
import { AppRoutingModule } from './app.routing';
import { ProjectModule } from './project/project.module';
import { CoreModule } from './core/core.module';
import { CoreComponent } from './core/core.component';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { SharedModule } from './shared/shared.module';
import { ProjectComponent } from './project/project.component';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptCommonModule } from'nativescript-angular/common';
import { NativeScriptRouterModule } from "nativescript-angular/router";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    DashboardModule,
    ProjectModule,
    AppRoutingModule,
    NativeScriptModule,
    NativeScriptHttpModule,
    NativeScriptCommonModule,
    NativeScriptRouterModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
