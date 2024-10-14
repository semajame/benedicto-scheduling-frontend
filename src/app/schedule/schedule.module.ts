import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';

import { LayoutComponent } from './layout.component';
import { ProspectusRoutingModule } from './schedule.routing.module';
import { ScheduleComponent } from './schedule.component';

//^ SCHEDULE
import { firstSchedComponent } from './IT/1st-year/firstSched.component';
import { secondSchedComponent } from './IT/2nd-year/secondSched.component';
import { thirdSchedComponent } from './IT/3rd-year/thirdSched.component';
import { fourthSchedComponent } from './IT/4th-year/fourthSched.component';
import { allSchedComponent } from './IT/all/allSched.component';
import { itLayoutComponent } from './IT/it.layout.component';

//^ EDUC
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

//^ COE
import { coeLayoutComponent } from './COE/coe.layout.component';

//^ CBM
import { cbmLayoutComponent } from './CBM/cbm.layout.component';

//^ ENLISTMENT IT
import { firstEnlistmentComponent } from './IT/1st-year/firstEnlistment.component';
import { secondEnlistmentComponent } from './IT/2nd-year/secondEnlistment.component';
import { thirdEnlistmentComponent } from './IT/3rd-year/thirdEnlistment.component';
import { fourthEnlistmentComponent } from './IT/4th-year/fourthEnlistment.component';

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

    //^ COE
    coeLayoutComponent,

    //^ CBM
    cbmLayoutComponent,

    LayoutComponent,
    ScheduleComponent,
  ],
})
export class scheduleModule {}
