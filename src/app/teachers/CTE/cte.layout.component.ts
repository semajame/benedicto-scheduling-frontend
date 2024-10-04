import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/_services/teacher.service';
import { Teachers } from 'src/app/_models/teachers';

import { first } from 'rxjs/operators';

@Component({ templateUrl: 'cte.layout.component.html' })
export class cteTeachersLayout implements OnInit {
  teachers: Teachers[] = [];
  loading = true;
  id?: string;
  errorMessage = '';

  constructor(private teacherService: TeacherService) {}

  ngOnInit() {
    // Example: Fetch teachers from 'Mandaue Campus' and 'College of Computer Studies'
    this.teacherService
      .getCTEInstructors('Mandaue Campus', 'College of Education and Arts')
      .subscribe((data: Teachers[]) => {
        console.log('Teachers filtered by campus and department:', data);
        this.teachers = data;
        this.loading = false;
      });
  }
}
