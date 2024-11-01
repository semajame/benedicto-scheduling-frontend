import { Component, OnInit, ViewChild } from '@angular/core';
import { SubjectService } from '@app/_services/subjects.service';
import { TeacherService } from '@app/_services/teacher.service';
import { Teachers } from '../../_models/teachers';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Room } from '@app/_models/rooms';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
import { Subjects } from '@app/_models/subjects';
import { AlertService } from '@app/_services/alert.service'; // Assuming AlertService is available

@Component({
  templateUrl: 'view.component.html',
  providers: [DatePipe],
})
export class ViewComponent implements OnInit {
  @ViewChild('schedulerReference5', { static: false })
  scheduler5!: jqxSchedulerComponent;

  room?: Room;
  loading = true;
  id?: string;
  conflicts: any[] = [];
  subjects: Subjects[] = [];
  selectedRoomName: string | undefined;

  teacherId?: number;

  source: any = {
    dataType: 'array',
    localdata: [],
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
      { name: 'readOnly', type: 'boolean' },
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
    to: 'end',
    day: 'day',
    year: 'year',
    draggable: 'draggable',
    resizable: 'resizable',
    readOnly: 'readOnly',
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

  constructor(
    private subjectService: SubjectService,
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private alertService: AlertService // Added the AlertService to constructor
  ) {}

  ngOnInit() {
    const roomId: string = this.route.snapshot.params['roomName'];
    if (roomId) {
      this.loading = true;
      this.selectedRoomName = roomId;
      this.subjectService.getRoomById(roomId).subscribe(
        (data) => {
          if (Array.isArray(data)) {
            this.room = data[0]; // If it's an array, get the first item
          } else {
            this.room = data; // Otherwise, assign directly
          }
          console.log('Room data:', this.room); // Debug: check the structure of room
          this.loading = false;
        },
        (error) => {
          console.error('Error fetching room:', error);
          this.loading = false;
        }
      );
    }

    this.generateAppointments();
    this.scheduler5.ensureAppointmentVisible('1');
  }

  generateAppointments(): any {
    if (!this.selectedRoomName) {
      this.alertService.error('Please select a room first.', {
        keepAfterRouteChange: true,
      });
      return;
    }

    this.subjectService.getRoomSchedule(this.selectedRoomName).subscribe({
      next: (data: any) => {
        this.conflicts = []; // Clear previous conflicts

        // Map data to appointment objects
        const appointments = data.map((event: any) => ({
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

        // Detect conflicts and add conflict messages
        for (let i = 0; i < appointments.length; i++) {
          for (let j = i + 1; j < appointments.length; j++) {
            const appointment1 = appointments[i];
            const appointment2 = appointments[j];
            const isConflict =
              appointment1.room === appointment2.room &&
              appointment1.start < appointment2.end &&
              appointment1.end > appointment2.start;

            if (isConflict) {
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
        this.scheduler5.source(this.dataAdapter);

        // Display a message if conflicts are found
        if (this.conflicts.length > 0) {
          this.alertService.error('Schedule conflicts found', {
            keepAfterRouteChange: true,
          });
        }
      },
      error: (error) => {
           this.alertService.warn('No schedules found in this room', {
                keepAfterRouteChange: true,
            });
            console.error('No schedules found in this room:', error);
      },
    });
  }
}
