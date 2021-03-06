import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './views/home/home-layout/home-layout.component';
import { DashboardComponent } from './views/dashboard/dashboard/dashboard.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { HomePageComponent } from './views/home/home-page/home-page.component';
import { LogInPageComponent } from './views/home/log-in-page/log-in-page.component';
import { SignInPageComponent } from './views/home/sign-in-page/sign-in-page.component';
import { DashboardHomeComponent } from './views/dashboard/dashboard-home/dashboard-home.component';
import { AutomatonsComponent } from './views/dashboard/automatons/automatons/automatons.component';
import { AutomatonsHomeComponent } from './views/dashboard/automatons/automatons-home/automatons-home.component';
import { AutomatonsCreateComponent } from './views/dashboard/automatons/automatons-create/automatons-create.component';
import { AutomatonDetailsComponent } from './views/dashboard/automatons/automaton-details/automaton-details.component';
import { AuthGuard } from './guards/auth.guard';
import { RedirectLoggedUserGuard } from './guards/redirect-logged-user.guard';
import { TopicsDetailsComponent } from './views/dashboard/automatons/topics-details/topics-details.component';
import { AutomatonEditionComponent } from './views/dashboard/automatons/automaton-edition/automaton-edition.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'log-in',
        component: LogInPageComponent,
        canActivate: [RedirectLoggedUserGuard]
      },
      {
        path: 'sign-in',
        component: SignInPageComponent,
        canActivate: [RedirectLoggedUserGuard]
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardHomeComponent
      },
      {
        path: 'automatons',
        component: AutomatonsComponent,
        children: [
          {
            path: '',
            component: AutomatonsHomeComponent
          },
          {
            path: 'create',
            component: AutomatonsCreateComponent
          },
          {
            path: ':id',
            component: AutomatonDetailsComponent
          },
          {
            path: ':id/edit',
            component: AutomatonEditionComponent
          },
          {
            path: ':automaton_id/topics/:topic_id',
            component: TopicsDetailsComponent
          }
        ]
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
