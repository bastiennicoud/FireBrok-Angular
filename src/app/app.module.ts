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

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireFunctionsModule, FunctionsRegionToken } from '@angular/fire/functions';

// Components
import { HomeLayoutComponent } from './views/home/home-layout/home-layout.component';
import { DashboardComponent } from './views/dashboard/dashboard/dashboard.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { LogInFormComponent } from './components/auth/log-in-form/log-in-form.component';
import { HomePageComponent } from './views/home/home-page/home-page.component';
import { LogInPageComponent } from './views/home/log-in-page/log-in-page.component';
import { SignInPageComponent } from './views/home/sign-in-page/sign-in-page.component';
import { DashboardHomeComponent } from './views/dashboard/dashboard-home/dashboard-home.component';
import { AutomatonsComponent } from './views/dashboard/automatons/automatons/automatons.component';
import { AutomatonsHomeComponent } from './views/dashboard/automatons/automatons-home/automatons-home.component';
import { AutomatonsCreateComponent } from './views/dashboard/automatons/automatons-create/automatons-create.component';
import { AutomatonDetailsComponent } from './views/dashboard/automatons/automaton-details/automaton-details.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RedirectLoggedUserGuard } from './guards/redirect-logged-user.guard';
import { FrappeGraphComponent } from './components/frappe-graph/frappe-graph.component';
import { TopicsDetailsComponent } from './views/dashboard/automatons/topics-details/topics-details.component';
import { AutomatonEditionComponent } from './views/dashboard/automatons/automaton-edition/automaton-edition.component';

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
    SignInPageComponent,
    DashboardHomeComponent,
    AutomatonsComponent,
    AutomatonsHomeComponent,
    AutomatonsCreateComponent,
    AutomatonDetailsComponent,
    FrappeGraphComponent,
    TopicsDetailsComponent,
    AutomatonEditionComponent
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
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    AngularFireAuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_GB },
    { provide: FunctionsRegionToken, useValue: 'europe-west1' },
    AuthService,
    AuthGuard,
    RedirectLoggedUserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
