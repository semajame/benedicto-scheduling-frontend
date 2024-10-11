import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AddComponent } from './IT/add.component';
import { ViewComponent } from './IT/view.component';
import { CTEviewComponent } from './CTE/view.component';
import { COEviewComponent } from './COE/view.component';
import { CBMviewComponent } from './CBM/view.component';

import { LayoutComponent } from './layout.component';
import { TeacherRoutingComponent } from './teacher.component';

import { itTeachersLayout } from '@app/teachers/IT/it.layout.component';
import { cteTeachersLayout } from './CTE/cte.layout.component';
import { coeTeachersLayout } from './COE/coe.layout.component';
import { cbmTeachersLayout } from './CBM/cbm.layout.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherRoutingComponent,
    children: [
      // { path: 'college-of-computer-studies/add', component: AddComponent },
      // { path: 'college-of-computer-studies/edit/:id', component: AddComponent },

      //^ IT
      {
        path: 'college-of-computer-studies/instructor/:id',
        component: ViewComponent,
      },
      { path: 'college-of-computer-studies', component: itTeachersLayout },

      //^ COE
      {
        path: 'college-of-engineering/instructor/:id',
        component: COEviewComponent,
      },
      { path: 'college-of-engineering', component: coeTeachersLayout },

      //^ CEA
      {
        path: 'college-of-education-and-arts/instructor/:id',
        component: CTEviewComponent,
      },
      { path: 'college-of-education-and-arts', component: cteTeachersLayout },
      { path: '', component: LayoutComponent },

      //^ CBM
      {
        path: 'college-of-business-management/instructor/:id',
        component: CBMviewComponent,
      },
      { path: 'college-of-business-management', component: cbmTeachersLayout },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
