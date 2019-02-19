import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_GB } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

// Components
import { HomeLayoutComponent } from './views/home/home-layout/home-layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { LogInFormComponent } from './components/auth/log-in-form/log-in-form.component';
import { HomePageComponent } from './views/home/home-page/home-page.component';
import { LogInPageComponent } from './views/home/log-in-page/log-in-page.component';
import { SignInPageComponent } from './views/home/sign-in-page/sign-in-page.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    DashboardComponent,
    NotFoundComponent,
    LogInFormComponent,
    HomePageComponent,
    LogInPageComponent,
    SignInPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_GB }],
  bootstrap: [AppComponent]
})
export class AppModule { }
