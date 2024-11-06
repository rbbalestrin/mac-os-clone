import { Routes } from '@angular/router';
import { BootComponent } from './boot/boot.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'boot',
    component: BootComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/boot',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/boot',
  },
];
