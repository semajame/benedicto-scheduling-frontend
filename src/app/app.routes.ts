import { Routes } from '@angular/router';

import { LoginComponent } from './account';
import { authGuard } from './_helpers';
import { AdminGuard } from './_helpers/admin.guard'; // Prevent admin from non-admin routes
import { AdminOnlyGuard } from './_helpers/admin-only.guard'; // Allow only admin to access admin pages

const homeModule = () => import('./home/home.module').then((x) => x.HomeModule);
const prospectusModule = () =>
  import('./prospectus/prospectus.module').then((x) => x.prospectusModule);
const teachersModule = () =>
  import('./teachers/teacher.module').then((x) => x.TeacherModule);
const adminModule = () =>
  import('./admin/admin.module').then((x) => x.AdminModule);
const profileModule = () =>
  import('./profile/profile.module').then((x) => x.ProfileModule);
const scheduleModule = () =>
  import('./schedule/schedule.module').then((x) => x.scheduleModule);

export const APP_ROUTES: Routes = [
  // Non-admin routes
  {
    path: '',
    loadChildren: homeModule,
    canActivate: [authGuard, AdminGuard],
  },
  { path: 'account/login', component: LoginComponent },
  {
    path: 'profile',
    loadChildren: profileModule,
    canActivate: [authGuard, AdminGuard],
  },
  {
    path: 'prospectus',
    loadChildren: prospectusModule,
    canActivate: [authGuard, AdminGuard],
  },
  {
    path: 'instructors',
    loadChildren: teachersModule,
    canActivate: [authGuard, AdminGuard],
  },
  {
    path: 'schedule',
    loadChildren: scheduleModule,
    canActivate: [authGuard, AdminGuard],
  },

  // Admin-only route
  {
    path: 'admin',
    loadChildren: adminModule,
    canActivate: [authGuard, AdminOnlyGuard],
  },

  // Redirect to home for invalid routes
  { path: '**', redirectTo: '' },
];
