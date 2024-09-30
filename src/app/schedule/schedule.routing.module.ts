import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ProspectusFirstComponent } from './IT/1st-year/prospectus-1st.component';
// import { ProspectusSecondComponent } from './IT/2nd-year/prospectus-2nd.component';
// import { ProspectusThirdComponent } from './IT/3rd-year/prospectus-3rd.component';
// import { ProspectusFourthComponent } from './IT/4th-year/prospectus-4th.component';

//^ IT SCHED
import { firstSchedComponent } from './IT/1st-year/firstSched.component';
import { secondSchedComponent } from './IT/2nd-year/secondSched.component';
import { thirdSchedComponent } from './IT/3rd-year/thirdSched.component';
import { fourthSchedComponent } from './IT/4th-year/fourthSched.component';
import { allSchedComponent } from './IT/all/allSched.component';
import { itLayoutComponent } from './IT/it.layout.component';

//^ CTE SCHED
import { educLayoutComponent } from './CTE/educ.layout.component';
import { bsedLayout } from './CTE/BSED/bsedLayout.component';
import { beedLayout } from './CTE/BEED/beedLayout.component';
import { bsedSchedComponent } from './CTE/BSED/all/allSched.component';
import { bsedFirstSchedComponent } from './CTE/BSED/1st-year/firstSched.component';
import { bsedScondSchedComponent } from './CTE/BSED/2nd-year/secondSched.component';
import { bsedThirdSchedComponent } from './CTE/BSED/3rd-year/thirdSched.component';
import { bsedFourthSchedComponent } from './CTE/BSED/4th-year/fourthSched.component';

//^ IT ENLISTMENT
import { firstEnlistmentComponent } from './IT/1st-year/firstEnlistment.component';
import { secondEnlistmentComponent } from './IT/2nd-year/secondEnlistment.component';
import { thirdEnlistmentComponent } from './IT/3rd-year/thirdEnlistment.component';
import { fourthEnlistmentComponent } from './IT/4th-year/fourthEnlistment.component';

import { LayoutComponent } from './layout.component';
import { ScheduleComponent } from './schedule.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
    children: [
      { path: 'college-of-computer-studies', component: itLayoutComponent },
      {
        path: 'college-of-computer-studies/bachelor-of-information-technology/1st-year',
        component: firstSchedComponent,
      },
      {
        path: 'college-of-computer-studies/bachelor-of-information-technology/1st-year/enlistment',
        component: firstEnlistmentComponent,
      },

      {
        path: 'college-of-computer-studies/bachelor-of-information-technology/2nd-year',
        component: secondSchedComponent,
      },
      {
        path: 'college-of-computer-studies/bachelor-of-information-technology/2nd-year/enlistment',
        component: secondEnlistmentComponent,
      },

      {
        path: 'college-of-computer-studies/bachelor-of-information-technology/3rd-year',
        component: thirdSchedComponent,
      },
      {
        path: 'college-of-computer-studies/bachelor-of-information-technology/3rd-year/enlistment',
        component: thirdEnlistmentComponent,
      },

      {
        path: 'college-of-computer-studies/bachelor-of-information-technology/4th-year',
        component: fourthSchedComponent,
      },
      {
        path: 'college-of-computer-studies/bachelor-of-information-technology/4th-year/enlistment',
        component: fourthEnlistmentComponent,
      },

      {
        path: 'college-of-computer-studies/bachelor-of-information-technology',
        component: allSchedComponent,
      },
      { path: '', component: LayoutComponent },

      //^ EDUC

      { path: 'college-of-teacher-education', component: educLayoutComponent },
      {
        path: 'college-of-teacher-education/bachelor-of-secondary-education',
        component: bsedLayout,
      },
      {
        path: 'college-of-teacher-education/bachelor-of-elementary-education',
        component: beedLayout,
      },
      {
        path: 'college-of-teacher-education/bachelor-of-secondary-education/schedule',
        component: bsedSchedComponent,
      },
      {
        path: 'college-of-teacher-education/bachelor-of-secondary-education/1st-year',
        component: bsedFirstSchedComponent,
      },
      {
        path: 'college-of-teacher-education/bachelor-of-secondary-education/2nd-year',
        component: bsedScondSchedComponent,
      },
      {
        path: 'college-of-teacher-education/bachelor-of-secondary-education/3rd-year',
        component: bsedThirdSchedComponent,
      },
      {
        path: 'college-of-teacher-education/bachelor-of-secondary-education/4th-year',
        component: bsedFourthSchedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectusRoutingModule {}
