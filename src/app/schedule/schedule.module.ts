import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';

import { LayoutComponent } from './layout.component';
import { ProspectusRoutingModule } from './schedule.routing.module';
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

//^CEA
import { educLayoutComponent } from './CTE/educ.layout.component';
import { bsedLayout } from './CTE/BSED/bsedLayout.component';
import { bsedSchedComponent } from './CTE/BSED/all/allSched.component';
import { bsedFirstSchedComponent } from './CTE/BSED/1st-year/firstSched.component';
import { bsedScondSchedComponent } from './CTE/BSED/2nd-year/secondSched.component';
import { bsedThirdSchedComponent } from './CTE/BSED/3rd-year/thirdSched.component';
import { bsedFourthSchedComponent } from './CTE/BSED/4th-year/fourthSched.component';
import { bsedFirstEnlistmentComponent } from './CTE/BSED/1st-year/firstEnlistment.component';
import { bsedSecondEnlistmentComponent } from './CTE/BSED/2nd-year/secondEnlistment.component';
import { bsedThirdEnlistmentComponent } from './CTE/BSED/3rd-year/thirdEnlistment.component';
import { bsedFourthEnlistmentComponent } from './CTE/BSED/4th-year/fourthEnlistment.component';
import { beedLayout } from './CTE/BEED/beedLayout.component';
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
import { bsceallSchedComponent } from './COE/BSCE/all/allSched.component';
import { bscefirstEnlistmentComponent } from './COE/BSCE/1st-year/firstEnlistment.component';
import { bscefirstSchedComponent } from './COE/BSCE/1st-year/firstSched.component';
import { bscesecondEnlistmentComponent } from './COE/BSCE/2nd-year/secondEnlistment.component';
import { bscesecondSchedComponent } from './COE/BSCE/2nd-year/secondSched.component';
import { bscethirdEnlistmentComponent } from './COE/BSCE/3rd-year/thirdEnlistment.component';
import { bscethirdSchedComponent } from './COE/BSCE/3rd-year/thirdSched.component';
import { bscefourthEnlistmentComponent } from './COE/BSCE/4th-year/fourthEnlistment.component';
import { bscefourthSchedComponent } from './COE/BSCE/4th-year/fourthSched.component';
import { bseefirstSchedComponent } from './COE/BSEE/1st-year/firstSched.component';
import { bseefirstEnlistmentComponent } from './COE/BSEE/1st-year/firstEnlistment.component';
import { bseesecondSchedComponent } from './COE/BSEE/2nd-year/secondSched.component';
import { bseesecondEnlistmentComponent } from './COE/BSEE/2nd-year/secondEnlistment.component';
import { bseethirdSchedComponent } from './COE/BSEE/3rd-year/thirdSched.component';
import { bseethirdEnlistmentComponent } from './COE/BSEE/3rd-year/thirdEnlistment.component';
import { bseefourthSchedComponent } from './COE/BSEE/4th-year/fourthSched.component';
import { bseefourthEnlistmentComponent } from './COE/BSEE/4th-year/fourthEnlistment.component';
import { bseeallSchedComponent } from './COE/BSEE/all/allSched.component';
import { bsieallSchedComponent } from './COE/BSIE/all/allSched.component';
import { bsiefirstEnlistmentComponent } from './COE/BSIE/1st-year/firstEnlistment.component';
import { bsiefirstSchedComponent } from './COE/BSIE/1st-year/firstSched.component';
import { bsiesecondEnlistmentComponent } from './COE/BSIE/2nd-year/secondEnlistment.component';
import { bsiesecondSchedComponent } from './COE/BSIE/2nd-year/secondSched.component';
import { bsiethirdEnlistmentComponent } from './COE/BSIE/3rd-year/thirdEnlistment.component';
import { bsiethirdSchedComponent } from './COE/BSIE/3rd-year/thirdSched.component';
import { bsiefourthEnlistmentComponent } from './COE/BSIE/4th-year/fourthEnlistment.component';
import { bsiefourthSchedComponent } from './COE/BSIE/4th-year/fourthSched.component';
import { bsmeallSchedComponent } from './COE/BSME/all/allSched.component';
import { bsmefirstEnlistmentComponent } from './COE/BSME/1st-year/firstEnlistment.component';
import { bsmefirstSchedComponent } from './COE/BSME/1st-year/firstSched.component';
import { bsmesecondEnlistmentComponent } from './COE/BSME/2nd-year/secondEnlistment.component';
import { bsmesecondSchedComponent } from './COE/BSME/2nd-year/secondSched.component';
import { bsmethirdEnlistmentComponent } from './COE/BSME/3rd-year/thirdEnlistment.component';
import { bsmethirdSchedComponent } from './COE/BSME/3rd-year/thirdSched.component';
import { bsmefourthEnlistmentComponent } from './COE/BSME/4th-year/fourthEnlistment.component';
import { bsmefourthSchedComponent } from './COE/BSME/4th-year/fourthSched.component';

//^ CBM
import { cbmLayoutComponent } from './CBM/cbm.layout.component';
import { bsaLayout } from './CBM/BSA/bsaLayout.component';
import { bsmmLayout } from './CBM/BSMM/bsmmLayout.component';
import { bshmLayout } from './CBM/BSHM/bshmLayout.component';
import { bshrmLayout } from './CBM/BSHRM/bshrmLayout.component';
import { bsafirstEnlistmentComponent } from './CBM/BSA/1st-year/firstEnlistment.component';
import { bsafirstSchedComponent } from './CBM/BSA/1st-year/firstSched.component';
import { bsasecondEnlistmentComponent } from './CBM/BSA/2nd-year/secondEnlistment.component';
import { bsasecondSchedComponent } from './CBM/BSA/2nd-year/secondSched.component';
import { bsathirdEnlistmentComponent } from './CBM/BSA/3rd-year/thirdEnlistment.component';
import { bsathirdSchedComponent } from './CBM/BSA/3rd-year/thirdSched.component';
import { bsafourthEnlistmentComponent } from './CBM/BSA/4th-year/fourthEnlistment.component';
import { bsafourthSchedComponent } from './CBM/BSA/4th-year/fourthSched.component';
import { bsaallSchedComponent } from './CBM/BSA/all/allSched.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProspectusRoutingModule,
    jqxSchedulerModule,
  ],
  declarations: [
    // SCHED

    //^IT
    firstSchedComponent,
    secondSchedComponent,
    thirdSchedComponent,
    fourthSchedComponent,
    allSchedComponent,
    itLayoutComponent,
    firstEnlistmentComponent,
    secondEnlistmentComponent,
    thirdEnlistmentComponent,
    fourthEnlistmentComponent,

    //^ EDUC
    educLayoutComponent,
    bsedLayout,
    beedLayout,
    bsedSchedComponent,
    bsedFirstSchedComponent,
    bsedScondSchedComponent,
    bsedThirdSchedComponent,
    bsedFourthSchedComponent,
    bsedFirstEnlistmentComponent,
    bsedSecondEnlistmentComponent,
    bsedThirdEnlistmentComponent,
    bsedFourthEnlistmentComponent,
    beedSchedComponent,
    beedFirstSchedComponent,
    beedFirstEnlistmentComponent,
    beedSecondEnlistmentComponent,
    beedSecondSchedComponent,
    beedThirdSchedComponent,
    beedThirdEnlistmentComponent,
    beedFourthEnlistmentComponent,
    beedFourthSchedComponent,

    //^ COE
    coeLayoutComponent,
    bsmeLayout,
    bsieLayout,
    bsceLayout,
    bseeLayout,
    bscefirstEnlistmentComponent,
    bscefirstSchedComponent,
    bscesecondEnlistmentComponent,
    bscesecondSchedComponent,
    bscethirdEnlistmentComponent,
    bscethirdSchedComponent,
    bscefourthEnlistmentComponent,
    bscefourthSchedComponent,
    bsceallSchedComponent,
    bseefirstSchedComponent,
    bseefirstEnlistmentComponent,
    bseesecondEnlistmentComponent,
    bseesecondSchedComponent,
    bseethirdEnlistmentComponent,
    bseethirdSchedComponent,
    bseefourthEnlistmentComponent,
    bseefourthSchedComponent,
    bseeallSchedComponent,
    bsieallSchedComponent,
    bsiefirstEnlistmentComponent,
    bsiefirstSchedComponent,
    bsiesecondEnlistmentComponent,
    bsiesecondSchedComponent,
    bsiethirdEnlistmentComponent,
    bsiethirdSchedComponent,
    bsiefourthEnlistmentComponent,
    bsiefourthSchedComponent,
    bsmeallSchedComponent,
    bsmefirstEnlistmentComponent,
    bsmefirstSchedComponent,
    bsmesecondEnlistmentComponent,
    bsmesecondSchedComponent,
    bsmethirdEnlistmentComponent,
    bsmethirdSchedComponent,
    bsmefourthEnlistmentComponent,
    bsmefourthSchedComponent,

    //^ CBM
    cbmLayoutComponent,
    bsaLayout,
    bsmmLayout,
    bshmLayout,
    bshrmLayout,
    bsafirstEnlistmentComponent,
    bsafirstSchedComponent,
    bsasecondEnlistmentComponent,
    bsasecondSchedComponent,
    bsathirdEnlistmentComponent,
    bsathirdSchedComponent,
    bsafourthEnlistmentComponent,
    bsafourthSchedComponent,
    bsaallSchedComponent,

    LayoutComponent,
    ScheduleComponent,
  ],
})
export class scheduleModule {}
