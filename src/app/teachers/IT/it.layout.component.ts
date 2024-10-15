import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/_services/teacher.service';
import { Teachers } from 'src/app/_models/teachers';

import { first } from 'rxjs/operators';

@Component({ templateUrl: 'it.layout.component.html' })
export class itTeachersLayout implements OnInit {
  teachers: Teachers[] = [];
  loading = true;
  id?: string;
  errorMessage = '';

  constructor(private teacherService: TeacherService) {}

  ngOnInit() {
    // Example: Fetch teachers from 'Mandaue Campus' and 'College of Computer Studies'
    this.teacherService
      .getInstructors('Mandaue Campus', 'College of Computer Studies')
      .subscribe((data: Teachers[]) => {
        console.log('Teachers filtered by campus and department:', data);
        this.teachers = data;
        this.loading = false;
      });
  }
}
