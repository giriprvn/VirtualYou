import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  {
      path: 'sign-up',
      component: SignUpComponent,
  },
];
