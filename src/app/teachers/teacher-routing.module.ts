import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AddComponent } from './IT/add.component';
import { ViewComponent } from './IT/view.component';
import { CTEviewComponent } from './CTE/view.component';
import { LayoutComponent } from './layout.component';
import { TeacherRoutingComponent } from './teacher.component';

import { itTeachersLayout } from '@app/teachers/IT/it.layout.component';
import { cteTeachersLayout } from './CTE/cte.layout.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherRoutingComponent,
    children: [
      // { path: 'college-of-computer-studies/add', component: AddComponent },
      // { path: 'college-of-computer-studies/edit/:id', component: AddComponent },
      {
        path: 'college-of-computer-studies/teacher/:id',
        component: ViewComponent,
      },
      { path: 'college-of-computer-studies', component: itTeachersLayout },
      {
        path: 'college-of-education-and-arts/view/:id',
        component: CTEviewComponent,
      },
      { path: 'college-of-education-and-arts', component: cteTeachersLayout },
      { path: '', component: LayoutComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
