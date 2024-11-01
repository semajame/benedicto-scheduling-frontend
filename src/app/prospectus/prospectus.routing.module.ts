import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspectusFirstComponent } from './IT/1st-year/prospectus-1st.component';
import { ProspectusSecondComponent } from './IT/2nd-year/prospectus-2nd.component';
import { ProspectusThirdComponent } from './IT/3rd-year/prospectus-3rd.component';
import { ProspectusFourthComponent } from './IT/4th-year/prospectus-4th.component';
import { itLayoutComponent } from './IT/it.layout.component';

//^ EDUC

import { educLayoutComponent } from './CTE/educ.layout.component';
import { bsedLayout } from './CTE/BSED/bsedLayout.component';
import { beedLayout } from './CTE/BEED/beedLayout.component';

//^ BSED
import { ProspectusBsedFirst } from './CTE/BSED/1st-year/prospectus-1st.component';
import { ProspectusBsedSecond } from './CTE/BSED/2nd-year/prospectus-2nd.component';
import { ProspectusBsedThird } from './CTE/BSED/3rd-year/prospectus-3rd.component';
import { ProspectusBsedFourth } from './CTE/BSED/4th-year/prospectus-4th.component';

//^ BEED

import { ProspectusBeedFirst } from './CTE/BEED/1st-year/prospectus-1st.component';
import { ProspectusBeedSecond } from './CTE/BEED/2nd-year/prospectus-2nd.component';
import { ProspectusBeedThird } from './CTE/BEED/3rd-year/prospectus-3rd.component';
import { ProspectusBeedFourth } from './CTE/BEED/4th-year/prospectus-4th.component';

//^ COE
import { coeLayoutComponent } from './COE/coe.layout.component';

import { LayoutComponent } from './layout.component';
import { ProspectusComponent } from './prospectus.component';
import { bsceLayout } from './COE/BSCE/bsceLayout.component';
import { bsmeLayout } from './COE/BSME/bsmeLayout.component';
import { bsieLayout } from './COE/BSIE/bsieLayout.component';
import { bseeLayout } from './COE/BSEE/bseeLayout.component';

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

      //^ EDUC
      { path: 'college-of-education-and-arts', component: educLayoutComponent },
      {
        path: 'college-of-education-and-arts/bachelor-of-secondary-education',
        component: bsedLayout,
      },
      {
        path: 'college-of-education-and-arts/bachelor-of-elementary-education',
        component: beedLayout,
      },

      //^ BSED
      {
        path: 'college-of-education-and-arts/bachelor-of-secondary-education/1st-year',
        component: ProspectusBsedFirst,
      },
      {
        path: 'college-of-education-and-arts/bachelor-of-secondary-education/2nd-year',
        component: ProspectusBsedSecond,
      },
      {
        path: 'college-of-education-and-arts/bachelor-of-secondary-education/3rd-year',
        component: ProspectusBsedThird,
      },
      {
        path: 'college-of-education-and-arts/bachelor-of-secondary-education/4th-year',
        component: ProspectusBsedFourth,
      },

      //^ BEED

      {
        path: 'college-of-education-and-arts/bachelor-of-elementary-education/1st-year',
        component: ProspectusBeedFirst,
      },
      {
        path: 'college-of-education-and-arts/bachelor-of-elementary-education/2nd-year',
        component: ProspectusBeedSecond,
      },
      {
        path: 'college-of-education-and-arts/bachelor-of-elementary-education/3rd-year',
        component: ProspectusBeedThird,
      },
      {
        path: 'college-of-education-and-arts/bachelor-of-elementary-education/4th-year',
        component: ProspectusBeedFourth,
      },

      //^ COE

      {
        path: 'college-of-engineering',
        component: coeLayoutComponent,
      },

      {
        path: 'college-of-engineering/civil-engineering',
        component: bsceLayout,
      },

      {
        path: 'college-of-engineering/mechanical-engineering',
        component: bsmeLayout,
      },

      {
        path: 'college-of-engineering/industrial-engineering',
        component: bsieLayout,
      },

      {
        path: 'college-of-engineering/electrical-engineering',
        component: bseeLayout,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectusRoutingModule {}
