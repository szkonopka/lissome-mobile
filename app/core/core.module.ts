import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentSwitcherService } from './services/component-switcher.service';
import { HttpModule } from '@angular/http';
import { Configuration } from '../config/app.config';
import { UserService } from './services/user.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NativeScriptFormsModule
  ],
  declarations: [
    LandingPageComponent,
    CoreComponent,
  ],
  exports: [
    CoreComponent
  ],
  providers: [
    ComponentSwitcherService,
    Configuration,
    UserService,
  ]
})

export class CoreModule { }
