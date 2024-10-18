import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ProspectusFirstComponent } from './IT/1st-year/prospectus-1st.component';
// import { ProspectusSecondComponent } from './IT/2nd-year/prospectus-2nd.component';
// import { ProspectusThirdComponent } from './IT/3rd-year/prospectus-3rd.component';
// import { ProspectusFourthComponent } from './IT/4th-year/prospectus-4th.component';

import { LayoutComponent } from './layout.component';
import { ScheduleComponent } from './schedule.component';

//^ IT
import { firstSchedComponent } from './IT/1st-year/firstSched.component';
import { secondSchedComponent } from './IT/2nd-year/secondSched.component';
import { thirdSchedComponent } from './IT/3rd-year/thirdSched.component';
import { fourthSchedComponent } from './IT/4th-year/fourthSched.component';
import { allSchedComponent } from './IT/all/allSched.component';
import { itLayoutComponent } from './IT/it.layout.component';
import { firstEnlistmentComponent } from './IT/1st-year/firstEnlistment.component';
import { secondEnlistmentComponent } from './IT/2nd-year/secondEnlistment.component';
import { thirdEnlistmentComponent } from './IT/3rd-year/thirdEnlistment.component';
import { fourthEnlistmentComponent } from './IT/4th-year/fourthEnlistment.component';

//^ CTE
import { educLayoutComponent } from './CTE/educ.layout.component';
import { bsedLayout } from './CTE/BSED/bsedLayout.component';
import { beedLayout } from './CTE/BEED/beedLayout.component';
import { bsedSchedComponent } from './CTE/BSED/all/allSched.component';
import { bsedFirstSchedComponent } from './CTE/BSED/1st-year/firstSched.component';
import { bsedScondSchedComponent } from './CTE/BSED/2nd-year/secondSched.component';
import { bsedThirdSchedComponent } from './CTE/BSED/3rd-year/thirdSched.component';
import { bsedFourthSchedComponent } from './CTE/BSED/4th-year/fourthSched.component';
import { bsedFirstEnlistmentComponent } from './CTE/BSED/1st-year/firstEnlistment.component';
import { bsedSecondEnlistmentComponent } from './CTE/BSED/2nd-year/secondEnlistment.component';
import { bsedThirdEnlistmentComponent } from './CTE/BSED/3rd-year/thirdEnlistment.component';
import { bsedFourthEnlistmentComponent } from './CTE/BSED/4th-year/fourthEnlistment.component';
import { beedSchedComponent } from './CTE/BEED/all/allSched.component';
import { beedFirstSchedComponent } from './CTE/BEED/1st-year/firstSched.component';
import { beedFirstEnlistmentComponent } from './CTE/BEED/1st-year/firstEnlistment.component';
import { beedSecondSchedComponent } from './CTE/BEED/2nd-year/secondSched.component';
import { beedSecondEnlistmentComponent } from './CTE/BEED/2nd-year/secondEnlistment.component';
import { beedThirdSchedComponent } from './CTE/BEED/3rd-year/thirdSched.component';
import { beedThirdEnlistmentComponent } from './CTE/BEED/3rd-year/thirdEnlistment.component';
import { beedFourthSchedComponent } from './CTE/BEED/4th-year/fourthSched.component';
import { beedFourthEnlistmentComponent } from './CTE/BEED/4th-year/fourthEnlistment.component';
//^ COE

import { coeLayoutComponent } from './COE/coe.layout.component';
import { bsmeLayout } from './COE/BSME/bsmeLayout.component';
import { bsieLayout } from './COE/BSIE/bsieLayout.component';
import { bsceLayout } from './COE/BSCE/bsceLayout.component';
import { bseeLayout } from './COE/BSEE/bseeLayout.component';

//^ CBM

import { cbmLayoutComponent } from './CBM/cbm.layout.component';
import { bsaLayout } from './CBM/BSA/bsaLayout.component';
import { bsmmLayout } from './CBM/BSMM/bsmmLayout.component';
import { bshmLayout } from './CBM/BSHM/bshmLayout.component';
import { bshrmLayout } from './CBM/BSHRM/bshrmLayout.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
    children: [
      { path: 'college-of-computer-studies', component: itLayoutComponent },
      {
        path: 'college-of-computer-studies/information-technology/1st-year',
        component: firstSchedComponent,
      },
      {
        path: 'college-of-computer-studies/information-technology/1st-year/enlistment',
        component: firstEnlistmentComponent,
      },

      {
        path: 'college-of-computer-studies/information-technology/2nd-year',
        component: secondSchedComponent,
      },
      {
        path: 'college-of-computer-studies/information-technology/2nd-year/enlistment',
        component: secondEnlistmentComponent,
      },

      {
        path: 'college-of-computer-studies/information-technology/3rd-year',
        component: thirdSchedComponent,
      },
      {
        path: 'college-of-computer-studies/information-technology/3rd-year/enlistment',
        component: thirdEnlistmentComponent,
      },

      {
        path: 'college-of-computer-studies/information-technology/4th-year',
        component: fourthSchedComponent,
      },
      {
        path: 'college-of-computer-studies/information-technology/4th-year/enlistment',
        component: fourthEnlistmentComponent,
      },

      {
        path: 'college-of-computer-studies/information-technology',
        component: allSchedComponent,
      },
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
      {
        path: 'college-of-education-and-arts/secondary-education/schedule',
        component: bsedSchedComponent,
      },
      {
        path: 'college-of-education-and-arts/secondary-education/1st-year',
        component: bsedFirstSchedComponent,
      },
      {
        path: 'college-of-education-and-arts/secondary-education/1st-year/enlistment',
        component: bsedFirstEnlistmentComponent,
      },

      {
        path: 'college-of-education-and-arts/secondary-education/2nd-year',
        component: bsedScondSchedComponent,
      },
      {
        path: 'college-of-education-and-arts/secondary-education/2nd-year/enlistment',
        component: bsedSecondEnlistmentComponent,
      },
      {
        path: 'college-of-education-and-arts/secondary-education/3rd-year',
        component: bsedThirdSchedComponent,
      },
      {
        path: 'college-of-education-and-arts/secondary-education/3rd-year/enlistment',
        component: bsedThirdEnlistmentComponent,
      },

      {
        path: 'college-of-education-and-arts/secondary-education/4th-year',
        component: bsedFourthSchedComponent,
      },
      {
        path: 'college-of-education-and-arts/secondary-education/4th-year/enlistment',
        component: bsedFourthEnlistmentComponent,
      },
      {
        path: 'college-of-education-and-arts/elementary-education/schedule',
        component: beedSchedComponent,
      },
      {
        path: 'college-of-education-and-arts/elementary-education/1st-year',
        component: beedFirstSchedComponent,
      },
      {
        path: 'college-of-education-and-arts/elementary-education/1st-year/enlistment',
        component: beedFirstEnlistmentComponent,
      },
      {
        path: 'college-of-education-and-arts/elementary-education/2nd-year',
        component: beedSecondSchedComponent,
      },
      {
        path: 'college-of-education-and-arts/elementary-education/2nd-year/enlistment',
        component: beedSecondEnlistmentComponent,
      },
      {
        path: 'college-of-education-and-arts/elementary-education/3rd-year',
        component: beedThirdSchedComponent,
      },
      {
        path: 'college-of-education-and-arts/elementary-education/3rd-year/enlistment',
        component: beedThirdEnlistmentComponent,
      },
      {
        path: 'college-of-education-and-arts/elementary-education/4th-year',
        component: beedFourthSchedComponent,
      },
      {
        path: 'college-of-education-and-arts/elementary-education/4th-year/enlistment',
        component: beedFourthEnlistmentComponent,
      },

      //^ COE

      { path: 'college-of-engineering', component: coeLayoutComponent },
      {
        path: 'college-of-engineering/mechanical-engineering',
        component: bsmeLayout,
      },
      {
        path: 'college-of-engineering/industrial-engineering',
        component: bsieLayout,
      },
      {
        path: 'college-of-engineering/civil-engineering',
        component: bsceLayout,
      },
      {
        path: 'college-of-engineering/electrical-engineering',
        component: bseeLayout,
      },

      //^ CBM

      { path: 'college-of-business-management', component: cbmLayoutComponent },
      {
        path: 'college-of-business-management/accountancy',
        component: bsaLayout,
      },
      {
        path: 'college-of-business-management/marketing-management',
        component: bsmmLayout,
      },
      {
        path: 'college-of-business-management/hospitality-management',
        component: bshmLayout,
      },
      {
        path: 'college-of-business-management/human-resource-management',
        component: bshrmLayout,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectusRoutingModule {}
