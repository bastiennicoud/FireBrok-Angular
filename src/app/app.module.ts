import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
  MatToolbar,
  MatIcon,
  MatNavList
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenav,
    BrowserAnimationsModule,
    MatSidenavContainer,
    MatSidenavContent,
    MatIcon,
    MatToolbar,
    MatNavList
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
