import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/_services/teacher.service';
import { Teachers } from 'src/app/_models/teachers';

import { first } from 'rxjs/operators';

@Component({ templateUrl: 'it.layout.component.html' })
export class itTeachersLayout implements OnInit {
  teachers: Teachers[] = [];
  loading = false;
  id?: string;

  constructor(private teacherService: TeacherService) {}

  ngOnInit() {
    this.teacherService
      .getAll()
      .pipe(first())
      .subscribe((teachers) => (this.teachers = teachers));
  }
}
