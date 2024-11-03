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
import { bsceLayout } from './COE/BSCE/bsceLayout.component';
import { bsmeLayout } from './COE/BSME/bsmeLayout.component';
import { bsieLayout } from './COE/BSIE/bsieLayout.component';
import { bseeLayout } from './COE/BSEE/bseeLayout.component';

//^ BSIE
import { ProspectusBsieFirst } from './COE/BSIE/1st-year/prospectus-1st.component';
import { ProspectusBsieSecond } from './COE/BSIE/2nd-year/prospectus-2nd.component';
import { ProspectusBsieThird } from './COE/BSIE/3rd-year/prospectus-3rd.component';
import { ProspectusBsieFourth } from './COE/BSIE/4th-year/prospectus-4th.component';

//^ BSEE
import { ProspectusBseeFirst } from './COE/BSEE/1st-year/prospectus-1st.component';
import { ProspectusBseeSecond } from './COE/BSEE/2nd-year/prospectus-2nd.component';
import { ProspectusBseeThird } from './COE/BSEE/3rd-year/prospectus-3rd.component';
import { ProspectusBseeFourth } from './COE/BSEE/4th-year/prospectus-4th.component';

//^ BSCE
import { ProspectusBsceFirst } from './COE/BSCE/1st-year/prospectus-1st.component';
import { ProspectusBsceSecond } from './COE/BSCE/2nd-year/prospectus-2nd.component';
import { ProspectusBsceThird } from './COE/BSCE/3rd-year/prospectus-3rd.component';
import { ProspectusBsceFourth } from './COE/BSCE/4th-year/prospectus-4th.component';

//^ BSME
import { ProspectusBsmeFirst } from './COE/BSME/1st-year/prospectus-1st.component';
import { ProspectusBsmeSecond } from './COE/BSME/2nd-year/prospectus-2nd.component';
import { ProspectusBsmeThird } from './COE/BSME/3rd-year/prospectus-3rd.component';
import { ProspectusBsmeFourth } from './COE/BSME/4th-year/prospectus-4th.component';

import { LayoutComponent } from './layout.component';
import { ProspectusComponent } from './prospectus.component';

//^ CBM
import { bsaLayout } from './CBM/BSA/bsaLayout.component';
import { bshmLayout } from './CBM/BSHM/bshmLayout.component';
import { bshrmLayout } from './CBM/BSHRM/bshrmLayout.component';
import { bsmmLayout } from './CBM/BSMM/bsmmLayout.component';
import { cbmLayoutComponent } from './CBM/cbm.layout.component';
import { ProspectusBsaFirst } from './CBM/BSA/1st-year/prospectus-1st.component';
import { ProspectusBsaSecond } from './CBM/BSA/2nd-year/prospectus-2nd.component';
import { ProspectusBsaThird } from './CBM/BSA/3rd-year/prospectus-3rd.component';
import { ProspectusBsaFourth } from './CBM/BSA/4th-year/prospectus-4th.component';
import { ProspectusBshmFirst } from './CBM/BSHM/1st-year/prospectus-1st.component';
import { ProspectusBshmSecond } from './CBM/BSHM/2nd-year/prospectus-2nd.component';
import { ProspectusBshmThird } from './CBM/BSHM/3rd-year/prospectus-3rd.component';
import { ProspectusBshmFourth } from './CBM/BSHM/4th-year/prospectus-4th.component';
import { ProspectusBshrmFirst } from './CBM/BSHRM/1st-year/prospectus-1st.component';
import { ProspectusBshrmSecond } from './CBM/BSHRM/2nd-year/prospectus-2nd.component';
import { ProspectusBshrmThird } from './CBM/BSHRM/3rd-year/prospectus-3rd.component';
import { ProspectusBshrmFourth } from './CBM/BSHRM/4th-year/prospectus-4th.component';
import { ProspectusBsmmFirst } from './CBM/BSMM/1st-year/prospectus-1st.component';
import { ProspectusBsmmSecond } from './CBM/BSMM/2nd-year/prospectus-2nd.component';
import { ProspectusBsmmThird } from './CBM/BSMM/3rd-year/prospectus-3rd.component';
import { ProspectusBsmmFourth } from './CBM/BSMM/4th-year/prospectus-4th.component';

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
        path: 'college-of-education-and-arts/secondary-education',
        component: bsedLayout,
      },
      {
        path: 'college-of-education-and-arts/elementary-education',
        component: beedLayout,
      },

      //^ BSED
      {
        path: 'college-of-education-and-arts/secondary-education/1st-year',
        component: ProspectusBsedFirst,
      },
      {
        path: 'college-of-education-and-arts/secondary-education/2nd-year',
        component: ProspectusBsedSecond,
      },
      {
        path: 'college-of-education-and-arts/secondary-education/3rd-year',
        component: ProspectusBsedThird,
      },
      {
        path: 'college-of-education-and-arts/secondary-education/4th-year',
        component: ProspectusBsedFourth,
      },

      //^ BEED

      {
        path: 'college-of-education-and-arts/elementary-education/1st-year',
        component: ProspectusBeedFirst,
      },
      {
        path: 'college-of-education-and-arts/elementary-education/2nd-year',
        component: ProspectusBeedSecond,
      },
      {
        path: 'college-of-education-and-arts/elementary-education/3rd-year',
        component: ProspectusBeedThird,
      },
      {
        path: 'college-of-education-and-arts/elementary-education/4th-year',
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
        path: 'college-of-engineering/civil-engineering/1st-year',
        component: ProspectusBsceFirst,
      },
      {
        path: 'college-of-engineering/civil-engineering/2nd-year',
        component: ProspectusBsceSecond,
      },
      {
        path: 'college-of-engineering/civil-engineering/3rd-year',
        component: ProspectusBsceThird,
      },
      {
        path: 'college-of-engineering/civil-engineering/4th-year',
        component: ProspectusBsceFourth,
      },

      {
        path: 'college-of-engineering/mechanical-engineering',
        component: bsmeLayout,
      },
      {
        path: 'college-of-engineering/mechanical-engineering/1st-year',
        component: ProspectusBsmeFirst,
      },
      {
        path: 'college-of-engineering/mechanical-engineering/2nd-year',
        component: ProspectusBsmeSecond,
      },
      {
        path: 'college-of-engineering/mechanical-engineering/3rd-year',
        component: ProspectusBsmeThird,
      },
      {
        path: 'college-of-engineering/mechanical-engineering/4th-year',
        component: ProspectusBsmeFourth,
      },

      {
        path: 'college-of-engineering/industrial-engineering',
        component: bsieLayout,
      },
      {
        path: 'college-of-engineering/industrial-engineering/1st-year',
        component: ProspectusBsieFirst,
      },
      {
        path: 'college-of-engineering/industrial-engineering/2nd-year',
        component: ProspectusBsieSecond,
      },
      {
        path: 'college-of-engineering/industrial-engineering/3rd-year',
        component: ProspectusBsieThird,
      },
      {
        path: 'college-of-engineering/industrial-engineering/4th-year',
        component: ProspectusBsieFourth,
      },

      {
        path: 'college-of-engineering/electrical-engineering',
        component: bseeLayout,
      },
      {
        path: 'college-of-engineering/electrical-engineering/1st-year',
        component: ProspectusBseeFirst,
      },
      {
        path: 'college-of-engineering/electrical-engineering/2nd-year',
        component: ProspectusBseeSecond,
      },
      {
        path: 'college-of-engineering/electrical-engineering/3rd-year',
        component: ProspectusBseeThird,
      },
      {
        path: 'college-of-engineering/electrical-engineering/4th-year',
        component: ProspectusBseeFourth,
      },

      {
        path: 'college-of-business-management',
        component: cbmLayoutComponent,
      },
      {
        path: 'college-of-business-management/accountancy',
        component: bsaLayout,
      },
      {
        path: 'college-of-business-management/accountancy/1st-year',
        component: ProspectusBsaFirst,
      },
      {
        path: 'college-of-business-management/accountancy/2nd-year',
        component: ProspectusBsaSecond,
      },
      {
        path: 'college-of-business-management/accountancy/3rd-year',
        component: ProspectusBsaThird,
      },
      {
        path: 'college-of-business-management/accountancy/4th-year',
        component: ProspectusBsaFourth,
      },
      {
        path: 'college-of-business-management/hospitality-management',
        component: bshmLayout,
      },
      {
        path: 'college-of-business-management/hospitality-management/1st-year',
        component: ProspectusBshmFirst,
      },
      {
        path: 'college-of-business-management/hospitality-management/2nd-year',
        component: ProspectusBshmSecond,
      },
      {
        path: 'college-of-business-management/hospitality-management/3rd-year',
        component: ProspectusBshmThird,
      },
      {
        path: 'college-of-business-management/hospitality-management/4th-year',
        component: ProspectusBshmFourth,
      },
      {
        path: 'college-of-business-management/human-resource-management',
        component: bshrmLayout,
      },
      {
        path: 'college-of-business-management/human-resource-management/1st-year',
        component: ProspectusBshrmFirst,
      },
      {
        path: 'college-of-business-management/human-resource-management/2nd-year',
        component: ProspectusBshrmSecond,
      },
      {
        path: 'college-of-business-management/human-resource-management/3rd-year',
        component: ProspectusBshrmThird,
      },
      {
        path: 'college-of-business-management/human-resource-management/4th-year',
        component: ProspectusBshrmFourth,
      },
      {
        path: 'college-of-business-management/marketing-management',
        component: bsmmLayout,
      },
      {
        path: 'college-of-business-management/marketing-management/1st-year',
        component: ProspectusBsmmFirst,
      },
      {
        path: 'college-of-business-management/marketing-management/2nd-year',
        component: ProspectusBsmmSecond,
      },
      {
        path: 'college-of-business-management/marketing-management/3rd-year',
        component: ProspectusBsmmThird,
      },
      {
        path: 'college-of-business-management/marketing-management/4th-year',
        component: ProspectusBsmmFourth,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectusRoutingModule {}
