import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
import { CbmService } from '@app/_services/cbm.service';
import { AlertService } from '@app/_services';
import { Teachers } from '@app/_models/teachers';

import { SubjectService } from '@app/_services/subjects.service';

import { Subjects } from '@app/_models/subjects';

import { first } from 'rxjs';
import * as $ from 'jquery';
import { TeacherService } from '@app/_services/teacher.service';

@Component({
  templateUrl: 'thirdSched.component.html',
})
export class bsathirdSchedComponent implements AfterViewInit {
  @ViewChild('schedulerReference3')
  scheduler3!: jqxSchedulerComponent;
  teachers: Teachers[] = [];
  conflicts: any[] = [];
  subjects: Subjects[] = [];

  constructor(
    private cbmService: CbmService,
    private alertService: AlertService,
    private teacherService: TeacherService,
    private subjectService: SubjectService
  ) {}

  ngAfterViewInit(): void {
    this.scheduler3.ensureAppointmentVisible('1');

    this.teacherService
      .getInstructors('Mandaue Campus', 'College of Business and Management')
      .pipe(first())
      .subscribe((teachers) => (this.teachers = teachers));
  }

  //^ GET APPOINTMENT
  generateAppointments(): any {
    this.cbmService.getThirdBsaSchedules().subscribe({
      next: (data) => {
        // Clear previous conflicts
        this.conflicts = [];

        // Map data to appointment objects
        const appointments = data.map((event) => ({
          id: event.id.toString(),
          subject_code: event.subject_code,
          subject: event.subject,
          units: event.units,
          teacher: event.teacher,
          room: event.room,
          start: new Date(event.start),
          end: new Date(event.end),
          day: event.dayName,
          year: event.year,
          draggable: false,
          resizable: false,
          recurrencePattern: event.recurrencePattern,
          background: event.background,
        }));

        // Detect conflicts and add conflict messages to notes
        appointments.forEach((appointment1, index1) => {
          appointments.slice(index1 + 1).forEach((appointment2) => {
            const isConflict =
              appointment1.room === appointment2.room &&
              appointment1.start < appointment2.end &&
              appointment1.end > appointment2.start;

            if (isConflict) {
              const conflictMessage1 = `Conflict with appointment ${appointment2.id}`;
              const conflictMessage2 = `Conflict with appointment ${appointment1.id}`;

              // Append conflict messages to notes

              // Add to conflicts array
              if (
                !this.conflicts.some(
                  (conflict) => conflict.id === appointment1.id
                )
              ) {
                this.conflicts.push({
                  id: appointment1.id,
                  subject_code: appointment1.subject_code,
                  subject: appointment1.subject,
                  units: appointment1.units,
                  teacher: appointment1.teacher,
                  room: appointment1.room,
                  start: appointment1.start,
                  end: appointment1.end,
                  day: appointment1.day,
                });
              }

              if (
                !this.conflicts.some(
                  (conflict) => conflict.id === appointment2.id
                )
              ) {
                this.conflicts.push({
                  id: appointment2.id,
                  subject_code: appointment2.subject_code,
                  subject: appointment2.subject,
                  units: appointment2.units,
                  teacher: appointment2.teacher,
                  room: appointment2.room,
                  start: appointment2.start,
                  end: appointment2.end,
                  day: appointment2.day,
                });
              }
            }
          });
        });

        // Load the appointments into the scheduler (if needed)
        this.source.localdata = appointments;
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.scheduler3.source(this.dataAdapter);

        // Log conflicts if any
        if (this.conflicts.length > 0) {
          this.alertService.error('Schedule conflicts found', {
            keepAfterRouteChange: true,
          });
        }
      },
      error: (error) => {
        this.alertService.error('Error loading schedules', {
          keepAfterRouteChange: true,
        });
        console.error('Error loading schedules:', error);
      },
    });
  }

  source: any = {
    dataType: 'array',
    localdata: this.generateAppointments(),
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'subject', type: 'string' },
      { name: 'subject_code', type: 'string' },
      { name: 'units', type: 'string' },
      { name: 'room', type: 'string' },
      { name: 'teacher', type: 'string' },
      { name: 'day', type: 'string' },
      { name: 'year', type: 'string' },
      { name: 'start', type: 'date' },
      { name: 'end', type: 'date' },
      { name: 'draggable', type: 'boolean' },
      { name: 'resizable', type: 'boolean' },
      { name: 'recurrencePattern', type: 'string' },
      { name: 'background', type: 'string' },
    ],
    id: 'id',
  };

  appointmentDataFields: any = {
    id: 'id',
    subject: 'subject',
    subject_code: 'subject_code',
    units: 'units',
    room: 'room',
    teacher: 'teacher',
    from: 'start',
    year: 'year',
    to: 'end',
    day: 'day',
    draggable: 'draggable',
    resizable: 'resizable',
    recurrencePattern: 'recurrencePattern',
    background: 'background',
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);
  date: any = new jqx.date();

  resources: any = {
    colorScheme: 'scheme05',
    dataField: 'calendar',
    source: new jqx.dataAdapter(this.source),
  };
  views: any[] = [
    {
      type: 'weekView',
      timeRuler: { hidden: false, scaleStartHour: 7 },
      allDay: false,
    },
  ];
}
