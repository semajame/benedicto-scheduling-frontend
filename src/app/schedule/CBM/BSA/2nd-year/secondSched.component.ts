import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
import { CbmService } from '@app/_services/cbm.service';
import { AlertService } from '@app/_services';
import { Teachers } from '@app/_models/teachers';

import { SubjectService } from '@app/_services/subjects.service';

import { Subjects } from '@app/_models/subjects';
import { first, forkJoin } from 'rxjs';
import * as $ from 'jquery';
import { TeacherService } from '@app/_services/teacher.service';

@Component({
  templateUrl: 'secondSched.component.html',
})
export class bsasecondSchedComponent implements AfterViewInit {
  @ViewChild('schedulerReference2')
  scheduler2!: jqxSchedulerComponent;
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
    this.scheduler2.ensureAppointmentVisible('1');

    this.teacherService
      .getInstructors('Mandaue Campus', 'College of Business and Management')
      .pipe(first())
      .subscribe((teachers) => (this.teachers = teachers));
  }

  //^ GET APPOINTMENT
  generateAppointments(): void {
    // Use forkJoin to wait for both `getMinorSubjects` and `getAllSchedules` to complete
    forkJoin({
      minorSubject: this.cbmService.findMinorSubjectsBsaSecondYear(),
      getSecondBsaSchedules: this.cbmService.getSecondBsaSchedules(),
    }).subscribe({
      next: ({ getSecondBsaSchedules, minorSubject }) => {
        // Clear previous conflicts
        this.conflicts = [];

        // Combine both sets of data into one array (you can change this logic based on your needs)
        const combinedData = [...getSecondBsaSchedules, ...minorSubject];

        // Map data to appointment objects
        const appointments = combinedData.map((event) => ({
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
        for (let i = 0; i < appointments.length; i++) {
          for (let j = i + 1; j < appointments.length; j++) {
            const appointment1 = appointments[i];
            const appointment2 = appointments[j];

            const isConflict =
              appointment1.room === appointment2.room &&
              appointment1.start < appointment2.end &&
              appointment1.end > appointment2.start;

            if (isConflict) {
              const conflictMessage1 = `Conflict with appointment ${appointment2.id}`;
              const conflictMessage2 = `Conflict with appointment ${appointment1.id}`;

              // Log conflict messages
              console.log(conflictMessage1, conflictMessage2);

              // Add to conflicts array if not already present
              [appointment1, appointment2].forEach((appointment) => {
                if (
                  !this.conflicts.some(
                    (conflict) => conflict.id === appointment.id
                  )
                ) {
                  this.conflicts.push({
                    id: appointment.id,
                    subject_code: appointment.subject_code,
                    subject: appointment.subject,
                    units: appointment.units,
                    teacher: appointment.teacher,
                    room: appointment.room,
                    start: appointment.start,
                    end: appointment.end,
                    day: appointment.day,
                  });
                }
              });
            }
          }
        }

        // Load the appointments into the scheduler
        this.source.localdata = appointments;
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.scheduler2.source(this.dataAdapter);

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
        console.error('Error loading schedules or minor subjects:', error);
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
