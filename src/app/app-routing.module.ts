import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './core/layouts/full/full.component';
import { BlankComponent } from './core/layouts/blank/blank.component';
import { AppDashboardComponent } from './core/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        // loadChildren: () =>
        //   import('./core/core.module').then((m) => m.CoreModule),
        component: AppDashboardComponent
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
