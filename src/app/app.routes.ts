import { Routes } from '@angular/router';

// import { HomeComponent } from './home';
import { LoginComponent } from './account';
import { authGuard } from './_helpers';
import { Role } from './_models/role';

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
  { path: '', loadChildren: homeModule, canActivate: [authGuard] },

  { path: 'account/login', component: LoginComponent },
  { path: 'profile', loadChildren: profileModule, canActivate: [authGuard] },
  {
    path: 'prospectus',
    loadChildren: prospectusModule,
    canActivate: [authGuard],
    data: { roles: [Role.Admin] },
  },
  {
    path: 'teachers',
    loadChildren: teachersModule,
    canActivate: [authGuard],
  },
  {
    path: 'schedule',
    loadChildren: scheduleModule,
    canActivate: [authGuard],
    data: { roles: [Role.Admin] },
  },
  {
    path: 'admin',
    loadChildren: adminModule,
    canActivate: [authGuard],
    data: { roles: [Role.Admin] },
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];
