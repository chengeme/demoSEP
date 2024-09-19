import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      //   {
      //     path: 'forget-password',
      //     component: AppSideForgetPasswordComponent,
      //   },
      //   {
      //     path: 'change-password',
      //     component: AppSideForgetPasswordComponent,
      //   },
    ],
  },
];
