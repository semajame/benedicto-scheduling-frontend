import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { LayoutComponent } from './layout.component';
import { AddComponent } from './IT/add.component';
import { ViewComponent } from './IT/view.component';
import { TeacherRoutingComponent } from './teacher.component';

import { itTeachersLayout } from '@app/teachers/IT/it.layout.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TeacherRoutingModule],
  declarations: [
    TeacherRoutingComponent,
    AddComponent,
    LayoutComponent,
    ViewComponent,
    itTeachersLayout,
  ],
})
export class TeacherModule {}
