import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './IT/add.component';
import { ViewComponent } from './IT/view.component';
import { LayoutComponent } from './layout.component';
import { TeacherRoutingComponent } from './teacher.component';

import { itTeachersLayout } from '@app/teachers/IT/it.layout.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherRoutingComponent,
    children: [
      { path: 'college-of-computer-studies/add', component: AddComponent },
      { path: 'college-of-computer-studies/edit/:id', component: AddComponent },
      {
        path: 'college-of-computer-studies/view/:id',
        component: ViewComponent,
      },
      { path: 'college-of-computer-studies', component: itTeachersLayout },
      { path: '', component: LayoutComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
