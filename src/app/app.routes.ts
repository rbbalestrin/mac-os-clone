import { Routes } from '@angular/router';
import { BootComponent } from './boot/boot.component';

export const routes: Routes = [
  {
    path: 'boot',
    component: BootComponent,
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
