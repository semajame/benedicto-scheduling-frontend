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
import { bscefirstEnlistmentComponent } from './COE/BSCE/1st-year/firstEnlistment.component';
import { bscefirstSchedComponent } from './COE/BSCE/1st-year/firstSched.component';
import { bscesecondEnlistmentComponent } from './COE/BSCE/2nd-year/secondEnlistment.component';
import { bscesecondSchedComponent } from './COE/BSCE/2nd-year/secondSched.component';
import { bscethirdEnlistmentComponent } from './COE/BSCE/3rd-year/thirdEnlistment.component';
import { bscethirdSchedComponent } from './COE/BSCE/3rd-year/thirdSched.component';
import { bscefourthEnlistmentComponent } from './COE/BSCE/4th-year/fourthEnlistment.component';
import { bscefourthSchedComponent } from './COE/BSCE/4th-year/fourthSched.component';
import { bsceallSchedComponent } from './COE/BSCE/all/allSched.component';
import { bseeallSchedComponent } from './COE/BSEE/all/allSched.component';
import { bseefirstSchedComponent } from './COE/BSEE/1st-year/firstSched.component';
import { bseefirstEnlistmentComponent } from './COE/BSEE/1st-year/firstEnlistment.component';
import { bseesecondEnlistmentComponent } from './COE/BSEE/2nd-year/secondEnlistment.component';
import { bseesecondSchedComponent } from './COE/BSEE/2nd-year/secondSched.component';
import { bseethirdEnlistmentComponent } from './COE/BSEE/3rd-year/thirdEnlistment.component';
import { bseethirdSchedComponent } from './COE/BSEE/3rd-year/thirdSched.component';
import { bseefourthEnlistmentComponent } from './COE/BSEE/4th-year/fourthEnlistment.component';
import { bseefourthSchedComponent } from './COE/BSEE/4th-year/fourthSched.component';
import { bsieallSchedComponent } from './COE/BSIE/all/allSched.component';
import { bsiefirstSchedComponent } from './COE/BSIE/1st-year/firstSched.component';
import { bsiefirstEnlistmentComponent } from './COE/BSIE/1st-year/firstEnlistment.component';
import { bsiesecondEnlistmentComponent } from './COE/BSIE/2nd-year/secondEnlistment.component';
import { bsiesecondSchedComponent } from './COE/BSIE/2nd-year/secondSched.component';
import { bsiethirdEnlistmentComponent } from './COE/BSIE/3rd-year/thirdEnlistment.component';
import { bsiethirdSchedComponent } from './COE/BSIE/3rd-year/thirdSched.component';
import { bsiefourthEnlistmentComponent } from './COE/BSIE/4th-year/fourthEnlistment.component';
import { bsiefourthSchedComponent } from './COE/BSIE/4th-year/fourthSched.component';
import { bsmefirstEnlistmentComponent } from './COE/BSME/1st-year/firstEnlistment.component';
import { bsmefirstSchedComponent } from './COE/BSME/1st-year/firstSched.component';
import { bsmesecondEnlistmentComponent } from './COE/BSME/2nd-year/secondEnlistment.component';
import { bsmesecondSchedComponent } from './COE/BSME/2nd-year/secondSched.component';
import { bsmethirdEnlistmentComponent } from './COE/BSME/3rd-year/thirdEnlistment.component';
import { bsmethirdSchedComponent } from './COE/BSME/3rd-year/thirdSched.component';
import { bsmefourthEnlistmentComponent } from './COE/BSME/4th-year/fourthEnlistment.component';
import { bsmefourthSchedComponent } from './COE/BSME/4th-year/fourthSched.component';
import { bsmeallSchedComponent } from './COE/BSME/all/allSched.component';

//^ CBM

import { cbmLayoutComponent } from './CBM/cbm.layout.component';
import { bsaLayout } from './CBM/BSA/bsaLayout.component';
import { bsmmLayout } from './CBM/BSMM/bsmmLayout.component';
import { bshmLayout } from './CBM/BSHM/bshmLayout.component';
import { bshrmLayout } from './CBM/BSHRM/bshrmLayout.component';
import { bsaallSchedComponent } from './CBM/BSA/all/allSched.component';
import { bsafirstEnlistmentComponent } from './CBM/BSA/1st-year/firstEnlistment.component';
import { bsafirstSchedComponent } from './CBM/BSA/1st-year/firstSched.component';
import { bsasecondEnlistmentComponent } from './CBM/BSA/2nd-year/secondEnlistment.component';
import { bsasecondSchedComponent } from './CBM/BSA/2nd-year/secondSched.component';
import { bsathirdEnlistmentComponent } from './CBM/BSA/3rd-year/thirdEnlistment.component';
import { bsathirdSchedComponent } from './CBM/BSA/3rd-year/thirdSched.component';
import { bsafourthEnlistmentComponent } from './CBM/BSA/4th-year/fourthEnlistment.component';
import { bsafourthSchedComponent } from './CBM/BSA/4th-year/fourthSched.component';
import { bshmallSchedComponent } from './CBM/BSHM/all/allSched.component';
import { bshmfirstEnlistmentComponent } from './CBM/BSHM/1st-year/firstEnlistment.component';
import { bshmfirstSchedComponent } from './CBM/BSHM/1st-year/firstSched.component';
import { bshmsecondEnlistmentComponent } from './CBM/BSHM/2nd-year/secondEnlistment.component';
import { bshmsecondSchedComponent } from './CBM/BSHM/2nd-year/secondSched.component';
import { bshmthirdEnlistmentComponent } from './CBM/BSHM/3rd-year/thirdEnlistment.component';
import { bshmthirdSchedComponent } from './CBM/BSHM/3rd-year/thirdSched.component';
import { bshmfourthEnlistmentComponent } from './CBM/BSHM/4th-year/fourthEnlistment.component';
import { bshmfourthSchedComponent } from './CBM/BSHM/4th-year/fourthSched.component';
import { bsmmfirstEnlistmentComponent } from './CBM/BSMM/1st-year/firstEnlistment.component';
import { bsmmfirstSchedComponent } from './CBM/BSMM/1st-year/firstSched.component';
import { bsmmsecondEnlistmentComponent } from './CBM/BSMM/2nd-year/secondEnlistment.component';
import { bsmmsecondSchedComponent } from './CBM/BSMM/2nd-year/secondSched.component';
import { bsmmthirdEnlistmentComponent } from './CBM/BSMM/3rd-year/thirdEnlistment.component';
import { bsmmthirdSchedComponent } from './CBM/BSMM/3rd-year/thirdSched.component';
import { bsmmfourthEnlistmentComponent } from './CBM/BSMM/4th-year/fourthEnlistment.component';
import { bsmmfourthSchedComponent } from './CBM/BSMM/4th-year/fourthSched.component';
import { bsmmallSchedComponent } from './CBM/BSMM/all/allSched.component';
import { bshrmfirstEnlistmentComponent } from './CBM/BSHRM/1st-year/firstEnlistment.component';
import { bshrmfirstSchedComponent } from './CBM/BSHRM/1st-year/firstSched.component';
import { bshrmsecondEnlistmentComponent } from './CBM/BSHRM/2nd-year/secondEnlistment.component';
import { bshrmsecondSchedComponent } from './CBM/BSHRM/2nd-year/secondSched.component';
import { bshrmthirdEnlistmentComponent } from './CBM/BSHRM/3rd-year/thirdEnlistment.component';
import { bshrmthirdSchedComponent } from './CBM/BSHRM/3rd-year/thirdSched.component';
import { bshrmfourthEnlistmentComponent } from './CBM/BSHRM/4th-year/fourthEnlistment.component';
import { bshrmfourthSchedComponent } from './CBM/BSHRM/4th-year/fourthSched.component';
import { bshrmallSchedComponent } from './CBM/BSHRM/all/allSched.component';

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

      //^ BSME

      {
        path: 'college-of-engineering/mechanical-engineering/schedule',
        component: bsmeallSchedComponent,
      },
      {
        path: 'college-of-engineering/mechanical-engineering/1st-year',
        component: bsmefirstSchedComponent,
      },
      {
        path: 'college-of-engineering/mechanical-engineering/1st-year/enlistment',
        component: bsmefirstEnlistmentComponent,
      },
      {
        path: 'college-of-engineering/mechanical-engineering/2nd-year/enlistment',
        component: bsmesecondEnlistmentComponent,
      },
      {
        path: 'college-of-engineering/mechanical-engineering/2nd-year',
        component: bsmesecondSchedComponent,
      },
      {
        path: 'college-of-engineering/mechanical-engineering/3rd-year/enlistment',
        component: bsmethirdEnlistmentComponent,
      },
      {
        path: 'college-of-engineering/mechanical-engineering/3rd-year',
        component: bsmethirdSchedComponent,
      },
      {
        path: 'college-of-engineering/mechanical-engineering/3rd-year/enlistment',
        component: bsmethirdEnlistmentComponent,
      },
      {
        path: 'college-of-engineering/mechanical-engineering/4th-year',
        component: bsmefourthSchedComponent,
      },
      {
        path: 'college-of-engineering/mechanical-engineering/4th-year/enlistment',
        component: bsmefourthEnlistmentComponent,
      },

      //^ BSCE
      {
        path: 'college-of-engineering/civil-engineering/schedule',
        component: bsceallSchedComponent,
      },
      {
        path: 'college-of-engineering/civil-engineering/1st-year',
        component: bscefirstSchedComponent,
      },
      {
        path: 'college-of-engineering/civil-engineering/1st-year/enlistment',
        component: bscefirstEnlistmentComponent,
      },
      {
        path: 'college-of-engineering/civil-engineering/2nd-year/enlistment',
        component: bscesecondEnlistmentComponent,
      },
      {
        path: 'college-of-engineering/civil-engineering/2nd-year',
        component: bscesecondSchedComponent,
      },
      {
        path: 'college-of-engineering/civil-engineering/3rd-year/enlistment',
        component: bscethirdEnlistmentComponent,
      },
      {
        path: 'college-of-engineering/civil-engineering/3rd-year',
        component: bscethirdSchedComponent,
      },
      {
        path: 'college-of-engineering/civil-engineering/3rd-year/enlistment',
        component: bscethirdEnlistmentComponent,
      },
      {
        path: 'college-of-engineering/civil-engineering/4th-year',
        component: bscefourthSchedComponent,
      },
      {
        path: 'college-of-engineering/civil-engineering/4th-year/enlistment',
        component: bscefourthEnlistmentComponent,
      },

      //^ BSEE
      {
        path: 'college-of-engineering/electrical-engineering/schedule',
        component: bseeallSchedComponent,
      },
      {
        path: 'college-of-engineering/electrical-engineering/1st-year',
        component: bseefirstSchedComponent,
      },
      {
        path: 'college-of-engineering/electrical-engineering/1st-year/enlistment',
        component: bseefirstEnlistmentComponent,
      },
      {
        path: 'college-of-engineering/electrical-engineering/2nd-year/enlistment',
        component: bseesecondEnlistmentComponent,
      },
      {
        path: 'college-of-engineering/electrical-engineering/2nd-year',
        component: bseesecondSchedComponent,
      },
      {
        path: 'college-of-engineering/electrical-engineering/3rd-year/enlistment',
        component: bseethirdEnlistmentComponent,
      },
      {
        path: 'college-of-engineering/electrical-engineering/3rd-year',
        component: bseethirdSchedComponent,
      },
      {
        path: 'college-of-engineering/electrical-engineering/4th-year',
        component: bseefourthSchedComponent,
      },
      {
        path: 'college-of-engineering/electrical-engineering/4th-year/enlistment',
        component: bseefourthEnlistmentComponent,
      },

      //^ BSIE

      {
        path: 'college-of-engineering/industrial-engineering/schedule',
        component: bsieallSchedComponent,
      },
      {
        path: 'college-of-engineering/industrial-engineering/1st-year',
        component: bsiefirstSchedComponent,
      },
      {
        path: 'college-of-engineering/industrial-engineering/1st-year/enlistment',
        component: bsiefirstEnlistmentComponent,
      },
      {
        path: 'college-of-engineering/industrial-engineering/2nd-year/enlistment',
        component: bsiesecondEnlistmentComponent,
      },
      {
        path: 'college-of-engineering/industrial-engineering/2nd-year',
        component: bsiesecondSchedComponent,
      },
      {
        path: 'college-of-engineering/industrial-engineering/3rd-year/enlistment',
        component: bsiethirdEnlistmentComponent,
      },
      {
        path: 'college-of-engineering/industrial-engineering/3rd-year',
        component: bsiethirdSchedComponent,
      },
      {
        path: 'college-of-engineering/industrial-engineering/4th-year',
        component: bsiefourthSchedComponent,
      },
      {
        path: 'college-of-engineering/industrial-engineering/4th-year/enlistment',
        component: bsiefourthEnlistmentComponent,
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
      {
        path: 'college-of-business-management/accountancy/schedule',
        component: bsaallSchedComponent,
      },
      {
        path: 'college-of-business-management/accountancy/1st-year',
        component: bsafirstSchedComponent,
      },
      {
        path: 'college-of-business-management/accountancy/1st-year/enlistment',
        component: bsafirstEnlistmentComponent,
      },
      {
        path: 'college-of-business-management/accountancy/2nd-year/enlistment',
        component: bsasecondEnlistmentComponent,
      },
      {
        path: 'college-of-business-management/accountancy/2nd-year',
        component: bsasecondSchedComponent,
      },
      {
        path: 'college-of-business-management/accountancy/3rd-year/enlistment',
        component: bsathirdEnlistmentComponent,
      },
      {
        path: 'college-of-business-management/accountancy/3rd-year',
        component: bsathirdSchedComponent,
      },
      {
        path: 'college-of-business-management/accountancy/4th-year',
        component: bsafourthSchedComponent,
      },
      {
        path: 'college-of-business-management/accountancy/4th-year/enlistment',
        component: bsafourthEnlistmentComponent,
      },
      {
        path: 'college-of-business-management/hospitality-management/schedule',
        component: bshmallSchedComponent,
      },
      {
        path: 'college-of-business-management/hospitality-management/1st-year',
        component: bshmfirstSchedComponent,
      },
      {
        path: 'college-of-business-management/hospitality-management/1st-year/enlistment',
        component: bshmfirstEnlistmentComponent,
      },
      {
        path: 'college-of-business-management/hospitality-management/2nd-year/enlistment',
        component: bshmsecondEnlistmentComponent,
      },
      {
        path: 'college-of-business-management/hospitality-management/2nd-year',
        component: bshmsecondSchedComponent,
      },
      {
        path: 'college-of-business-management/hospitality-management/3rd-year/enlistment',
        component: bshmthirdEnlistmentComponent,
      },
      {
        path: 'college-of-business-management/hospitality-management/3rd-year',
        component: bshmthirdSchedComponent,
      },
      {
        path: 'college-of-business-management/hospitality-management/4th-year',
        component: bshmfourthSchedComponent,
      },
      {
        path: 'college-of-business-management/hospitality-management/4th-year/enlistment',
        component: bshmfourthEnlistmentComponent,
      },
      {
        path: 'college-of-business-management/marketing-management/schedule',
        component: bsmmallSchedComponent,
      },
      {
        path: 'college-of-business-management/marketing-management/1st-year',
        component: bsmmfirstSchedComponent,
      },
      {
        path: 'college-of-business-management/marketing-management/1st-year/enlistment',
        component: bsmmfirstEnlistmentComponent,
      },
      {
        path: 'college-of-business-management/marketing-management/2nd-year/enlistment',
        component: bsmmsecondEnlistmentComponent,
      },
      {
        path: 'college-of-business-management/marketing-management/2nd-year',
        component: bsmmsecondSchedComponent,
      },
      {
        path: 'college-of-business-management/marketing-management/3rd-year/enlistment',
        component: bsmmthirdEnlistmentComponent,
      },
      {
        path: 'college-of-business-management/marketing-management/3rd-year',
        component: bsmmthirdSchedComponent,
      },
      {
        path: 'college-of-business-management/marketing-management/4th-year',
        component: bsmmfourthSchedComponent,
      },
      {
        path: 'college-of-business-management/marketing-management/4th-year/enlistment',
        component: bsmmfourthEnlistmentComponent,
      },
      {
        path: 'college-of-business-management/human-resource-management/schedule',
        component: bshrmallSchedComponent,
      },
      {
        path: 'college-of-business-management/human-resource-management/1st-year',
        component: bshrmfirstSchedComponent,
      },
      {
        path: 'college-of-business-management/human-resource-management/1st-year/enlistment',
        component: bshrmfirstEnlistmentComponent,
      },
      {
        path: 'college-of-business-management/human-resource-management/2nd-year/enlistment',
        component: bshrmsecondEnlistmentComponent,
      },
      {
        path: 'college-of-business-management/human-resource-management/2nd-year',
        component: bshrmsecondSchedComponent,
      },
      {
        path: 'college-of-business-management/human-resource-management/3rd-year/enlistment',
        component: bshrmthirdEnlistmentComponent,
      },
      {
        path: 'college-of-business-management/human-resource-management/3rd-year',
        component: bshrmthirdSchedComponent,
      },
      {
        path: 'college-of-business-management/human-resource-management/4th-year',
        component: bshrmfourthSchedComponent,
      },
      {
        path: 'college-of-business-management/human-resource-management/4th-year/enlistment',
        component: bshrmfourthEnlistmentComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectusRoutingModule {}
