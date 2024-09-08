import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspectusFirstComponent } from './IT/1st-year/prospectus-1st.component';
import { ProspectusSecondComponent } from './IT/2nd-year/prospectus-2nd.component';
import { ProspectusThirdComponent } from './IT/3rd-year/prospectus-3rd.component';
import { ProspectusFourthComponent } from './IT/4th-year/prospectus-4th.component';
import { itLayoutComponent } from './IT/it.layout.component';

import { LayoutComponent } from './layout.component';
import { ProspectusComponent } from './prospectus.component';

const routes: Routes = [
  {
    path: '',
    component: ProspectusComponent,
    children: [
      {
        path: 'college-of-computer-studies/1st-year',
        component: ProspectusFirstComponent,
      },
      {
        path: 'college-of-computer-studies/2nd-year',
        component: ProspectusSecondComponent,
      },
      {
        path: 'college-of-computer-studies/3rd-year',
        component: ProspectusThirdComponent,
      },
      {
        path: 'college-of-computer-studies/4th-year',
        component: ProspectusFourthComponent,
      },
      { path: 'college-of-computer-studies', component: itLayoutComponent },
      { path: '', component: LayoutComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectusRoutingModule {}
