import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  OnInit,
} from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';

//^ SERVICE
import { SharedService } from '@app/shared.service';
import { AlertService } from '@app/_services';

import { Teachers } from '@app/_models/teachers';
import { TeacherService } from '@app/_services/teacher.service';

import { first } from 'rxjs';
import * as $ from 'jquery';

import { schedule } from '@app/_models/schedule';

@Component({
  templateUrl: 'secondSched.component.html',
})
export class secondSchedComponent implements AfterViewInit {
  @ViewChild('schedulerReference2')
  scheduler2!: jqxSchedulerComponent;

  teachers: Teachers[] = [];

  constructor(
    private sharedService: SharedService,
    private alertService: AlertService,
    private teacherService: TeacherService
  ) {}

  ngAfterViewInit(): void {
    this.scheduler2.ensureAppointmentVisible('1');

    this.teacherService
      .getAll()
      .pipe(first())
      .subscribe((teachers) => (this.teachers = teachers));

    //^ ADD ALERT
    if (localStorage.getItem('scheduleAdded') === 'true') {
      // Display the success alert
      this.alertService.success('Added schedule successful', {
        keepAfterRouteChange: true,
      });

      // Remove the flag from localStorage to prevent repeated alerts
      localStorage.removeItem('scheduleAdded');
    }

    //^ UPDATED ALERT
    if (localStorage.getItem('scheduleUpdated') === 'true') {
      // Display the success alert
      this.alertService.success('Updated schedule successful', {
        keepAfterRouteChange: true,
      });

      // Remove the flag from localStorage to prevent repeated alerts
      localStorage.removeItem('scheduleUpdated');
    }

    //^ DELETE ALERT
    if (localStorage.getItem('scheduleDeleted') === 'true') {
      // Display the success alert
      this.alertService.success('Delete schedule successful', {
        keepAfterRouteChange: true,
      });

      // Remove the flag from localStorage to prevent repeated alerts
      localStorage.removeItem('scheduleDeleted');
    }
  }

  generateAppointments(): any {
    this.sharedService.getSecondSchedules().subscribe(
      (data) => {
        const appointments = data.map((event) => ({
          id: event.id.toString(),
          subject_code: event.subject_code,
          subject: event.subject,
          units: event.units,
          room: event.room,
          teacher: event.teacher,
          start: new Date(event.start),
          end: new Date(event.end),
          draggable: false,
          resizable: false,
          recurrencePattern: event.recurrencePattern,
          background: event.background,
        }));

        this.source.localdata = appointments;
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.scheduler2.source(this.dataAdapter);
        console.log(this.source.localdata);
      },
      (error) => {
        console.error('Error loading schedules:', error);
      }
    );
  }

  //^ ADD APPOINTMENT
  AppointmentAdd(event: any): void {
    const appointment = event.args.appointment.originalData;

    const subject_code = $('#subjectCode').val();
    const units = $('#units').val();
    const subject = $('#subject').val();
    const room = $('#room').val();
    const teacher = $('#teacher').val();

    const startDate = new Date(appointment.start);

    // If you need the name of the day instead of the numeric value
    const daysOfWeek: { [key: string]: string } = {
      SU: 'Sunday',
      MO: 'M',
      TU: 'T',
      WE: 'W',
      TH: 'TH',
      FR: 'F',
      SA: 'S',
    };

    const recurrencePattern = appointment.recurrencePattern?.toString() ?? '';
    const matchedDays = recurrencePattern.match(/BYDAY=([^;]+)/);
    const dayNames = matchedDays
      ? matchedDays[1]
          .split(',')
          .map((day: keyof typeof daysOfWeek) => daysOfWeek[day])
      : [
          daysOfWeek[
            Object.keys(daysOfWeek)[
              startDate.getDay()
            ] as keyof typeof daysOfWeek
          ],
        ];

    const dayName = dayNames.join(''); // Combine day names, e.g., "M, T"

    const newAppointment = {
      subject_code: subject_code,
      subject: subject,
      units: units,
      room: room,
      teacher: teacher,
      start: new Date(startDate),
      end: new Date(appointment.end),
      recurrencePattern: recurrencePattern || null,
      day: dayName, // Add the combined day names
      background: appointment.background,
    };

    console.log('recurrncepattern: ', typeof appointment.recurrencePattern);

    this.sharedService.addSecondSchedule(newAppointment).subscribe({
      next: (response) => {
        // this.alertService.success('Success adding schedule', {
        //   keepAfterRouteChange: true,
        // });
        appointment.id = response.id;

        this.source.localdata.push(appointment);
        this.scheduler2.source(this.dataAdapter);

        localStorage.setItem('scheduleAdded', 'true');

        window.location.reload();
      },

      error: (error) => {
        this.alertService.error('Error adding schedule', {
          keepAfterRouteChange: true,
          error,
        });
        console.log(teacher);
        console.log(units);
        // window.location.reload();
        console.log('asdasd');
      },
    });
  }

  //^ UPDATE SCHEDULE
  AppointmentUpdate(event: any): void {
    const appointment = event.args.appointment.originalData;

    const subject_code = $('#subjectCode').val();
    const units = $('#units').val();
    const subject = $('#subject').val();
    const room = $('#room').val();
    const teacher = $('#teacher').val();

    const startDate = new Date(appointment.start);

    // If you need the name of the day instead of the numeric value
    const daysOfWeek: { [key: string]: string } = {
      SU: 'Sunday',
      MO: 'M',
      TU: 'T',
      WE: 'W',
      TH: 'TH',
      FR: 'F',
      SA: 'S',
    };

    // Extract and parse the recurrence pattern to get the days of the week
    const recurrencePattern = appointment.recurrencePattern?.toString() ?? '';
    const matchedDays = recurrencePattern.match(/BYDAY=([^;]+)/);
    const dayNames = matchedDays
      ? matchedDays[1]
          .split(',')
          .map((day: keyof typeof daysOfWeek) => daysOfWeek[day])
      : [
          daysOfWeek[
            Object.keys(daysOfWeek)[
              startDate.getDay()
            ] as keyof typeof daysOfWeek
          ],
        ];

    const dayName = dayNames.join(''); // Combine day names, e.g., "M, T"

    const updatedAppointment = {
      subject_code: subject_code,
      subject: subject,
      units: units,
      room: room,
      teacher: teacher,
      start: new Date(startDate),
      end: new Date(appointment.end),
      recurrencePattern: recurrencePattern || null,
      day: dayName, // Add the combined day names
      background: appointment.background,
    };

    // Assume appointment.id is available in the event or the originalData
    this.sharedService
      .updateSecondSchedule(appointment.id, updatedAppointment)
      .subscribe({
        next: (response) => {
          // Handle successful update
          console.log('Appointment updated successfully', response);
          this.source.localdata = this.source.localdata.map(
            (item: { id: any }) =>
              item.id === appointment.id ? updatedAppointment : item
          );
          this.scheduler2.source(this.dataAdapter);
          localStorage.setItem('scheduleUpdated', 'true');
          window.location.reload();
        },
        error: (error) => {
          // Handle error during update
          console.error('Error updating appointment', error);
        },
      });
  }

  //^ DELETE APPOINTMENT
  AppointmentDelete(event: any): void {
    const appointment = event.args.appointment.originalData;

    if (confirm('Are you sure you want to delete this appointment?')) {
      this.sharedService.deleteSecondSchedule(appointment.id).subscribe({
        next: () => {
          console.log('Appointment deleted successfully');
          // Remove the appointment from the local data source
          this.source.localdata = this.source.localdata.filter(
            (item: { id: any }) => item.id !== appointment.id
          );
          this.scheduler2.source(this.dataAdapter);
          localStorage.setItem('scheduleDeleted', 'true');

          window.location.reload();
        },
        error: (error) => {
          this.alertService.error('Error deleting schedule', {
            keepAfterRouteChange: true,
            error,
          });
          console.error('Error deleting appointment', error);
        },
      });
    }
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
    to: 'end',
    draggable: 'draggable',
    resizable: 'resizable',
    recurrencePattern: 'recurrencePattern',
    background: 'background',
  };

  editDialogCreate = (dialog: any, fields: any, editAppointment: any) => {
    let subjectCodeContainer = ` <div>
        <div class="jqx-scheduler-edit-dialog-label pr-0" style="padding-right: 0; padding-left: 0; ">Subject Code</div>
        <div class="jqx-scheduler-edit-dialog-field">
          <select id="subjectCode" name="subjectCode">
            <option value="IT210">IT210</option>
            <option value="IT211">IT211</option>
            <option value="IT221">IT221</option>
            <option value="CW">CW</option>
            <option value="ArtApp">ArtApp</option>
            <option value="PATHFIT">PATHFIT</option>
          </select>
        </div>
      </div>`;
    fields.subjectContainer.append(subjectCodeContainer);

    let subjectInput = `
    <div class="jqx-scheduler-edit-dialog-label">Subject</div>
      <div class="jqx-scheduler-edit-dialog-field">
        <select id="subject" name="subject">
          <option value="Data Structures & Algorithms">Data Structures & Algorithms</option>
          <option value="Web Design & Development">Web Design & Development</option>
          <option value="Digital Logic Design">Digital Logic Design</option>
          <option value="Networking">Networking</option>
           <option value="The Contemporary World">The Contemporary World</option>
          <option value="	Art Appreciation">Art Appreciation</option>
          <option value="	Individual/Dual Sports">National Service Training Prog. 1</option>
        </select>
      </div>
 `;

    fields.subjectContainer.append(subjectInput);

    let unitsContainer = ` <div>
        <div class="jqx-scheduler-edit-dialog-label">Units</div>
        <div class="jqx-scheduler-edit-dialog-field">
          <select id="units" name="units">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>`;
    fields.subjectContainer.append(unitsContainer);

    let roomContainer = ` <div>
    <div class="jqx-scheduler-edit-dialog-label">Room</div>
    <div class="jqx-scheduler-edit-dialog-field">
      <select id="room" name="room">
        <option value="Computer Lab 1">Computer Lab 1</option>
        <option value="Computer Lab 2">Computer Lab 2</option>
      </select>
    </div>
  </div>`;
    fields.subjectContainer.append(roomContainer);

    let teacherContainer = `
    <div>
      <div class="jqx-scheduler-edit-dialog-label">Teacher</div>
      <div class="jqx-scheduler-edit-dialog-field">
        <select id="teacher" name="teacher"></select>
      </div>
    </div>
  `;

    fields.subjectContainer.append(teacherContainer);

    const teacherSelect = document.getElementById('teacher');

    if (teacherSelect) {
      this.teachers.forEach((teacher: any) => {
        let option = document.createElement('option');
        option.value = `${teacher.firstName} ${teacher.lastName}`;
        option.text = `${teacher.firstName} ${teacher.lastName}`;
        teacherSelect.appendChild(option);

        console.log('teachers: ', option.value);
      });
    }
  };

  editDialogOpen = (dialog: any, fields: any, editAppointment: any) => {
    // fields.repeatContainer.hide();
    fields.subject.hide();
    fields.subjectLabel.hide();
    fields.descriptionContainer.hide();
    fields.statusContainer.hide();
    fields.timeZoneContainer.hide();
    fields.allDayContainer.hide();
    fields.locationContainer.hide();
    fields.resetExceptionsContainer.hide();

    setTimeout(() => {
      $(dialog).closest('.jqx-window').addClass('center-fixed-dialog');
    }, 10);

    if (editAppointment) {
      const appointmentData = editAppointment.originalData;
      setTimeout(() => {
        $('#subjectCode').val(appointmentData.subject_code);
        $('#units').val(appointmentData.units);
        $('#subject').val(appointmentData.subject);
        $('#room').val(appointmentData.room);
        $('#teacher').val(appointmentData.teacher);
      }, 100); // Slight delay to ensure elements are available
    }
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
