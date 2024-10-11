import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { LayoutComponent } from './layout.component';
// import { AddComponent } from './IT/add.component';

import { TeacherRoutingComponent } from './teacher.component';

import { itTeachersLayout } from '@app/teachers/IT/it.layout.component';
import { ViewComponent } from './IT/view.component';

import { coeTeachersLayout } from './COE/coe.layout.component';
import { COEviewComponent } from './COE/view.component';

import { CTEviewComponent } from './CTE/view.component';
import { cteTeachersLayout } from './CTE/cte.layout.component';

import { cbmTeachersLayout } from './CBM/cbm.layout.component';
import { CBMviewComponent } from './CBM/view.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TeacherRoutingModule],
  declarations: [
    TeacherRoutingComponent,
    // AddComponent,
    LayoutComponent,

    //^ IT
    ViewComponent,
    itTeachersLayout,

    //^ CTE
    CTEviewComponent,
    cteTeachersLayout,

    //^ COE
    coeTeachersLayout,
    COEviewComponent,

    //^ CBM
    CBMviewComponent,
    cbmTeachersLayout,
  ],
})
export class TeacherModule {}
