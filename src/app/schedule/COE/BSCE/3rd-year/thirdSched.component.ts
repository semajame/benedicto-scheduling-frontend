import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
import { CoeService } from '@app/_services/coe.service';
import { AlertService } from '@app/_services';
import { Teachers } from '@app/_models/teachers';

import { SubjectService } from '@app/_services/subjects.service';

import { Subjects } from '@app/_models/subjects';

import { first, forkJoin } from 'rxjs';
import * as $ from 'jquery';
import { TeacherService } from '@app/_services/teacher.service';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  templateUrl: 'thirdSched.component.html',
})
export class bscethirdSchedComponent implements AfterViewInit {
  @ViewChild('schedulerReference3')
  scheduler3!: jqxSchedulerComponent;

  @ViewChild('pdfContent')
  pdfContent!: ElementRef;

  teachers: Teachers[] = [];
  conflicts: any[] = [];
  subjects: Subjects[] = [];

  constructor(
    private coeService: CoeService,
    private alertService: AlertService,
    private teacherService: TeacherService,
    private subjectService: SubjectService
  ) {}

  generatePDF() {
    html2canvas(this.pdfContent.nativeElement, { scale: 2 }).then((canvas) => {
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pageHeight = 297; // A4 height in mm

      // Calculate the number of pages needed
      let position = 0;
      let heightLeft = imgHeight;

      // Add the first image
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add extra pages if necessary
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('3rd-year-bsce-schedule.pdf');
    });
  }

  ngAfterViewInit(): void {
    this.scheduler3.ensureAppointmentVisible('1');

    this.teacherService
      .getInstructors('Mandaue Campus', 'College of Engineering')
      .pipe(first())
      .subscribe((teachers) => (this.teachers = teachers));
  }

  //^ GET APPOINTMENT
  generateAppointments(): void {
    // Use forkJoin to wait for both `getMinorSubjects` and `getAllSchedules` to complete
    forkJoin({
      getThirdBsceSchedules: this.coeService.getThirdBsceSchedules(),
    }).subscribe({
      next: ({ getThirdBsceSchedules }) => {
        // Clear previous conflicts
        this.conflicts = [];

        // Combine both sets of data into one array (you can change this logic based on your needs)
        const combinedData = [...getThirdBsceSchedules];

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
          day: event.day,
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
              appointment1.day === appointment2.day &&
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
                    reccurencePattern: appointment.recurrencePattern,
                  });
                }
              });
            }
          }
        }

        // Load the appointments into the scheduler
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
