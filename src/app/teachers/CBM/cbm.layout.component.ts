import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/_services/teacher.service';
import { Teachers } from 'src/app/_models/teachers';

import { first } from 'rxjs/operators';

@Component({ templateUrl: 'cbm.layout.component.html' })
export class cbmTeachersLayout implements OnInit {
  teachers: Teachers[] = [];
  loading = true;
  id?: string;
  errorMessage = '';

  constructor(private teacherService: TeacherService) {}

  ngOnInit() {
    // Example: Fetch teachers from 'Mandaue Campus' and 'College of Computer Studies'
    this.teacherService
      .getCOEInstructors('Mandaue Campus', 'College of Business Management')
      .subscribe((data: Teachers[]) => {
        console.log('Teachers filtered by campus and department:', data);
        this.teachers = data;
        this.loading = false;
      });
  }
}
