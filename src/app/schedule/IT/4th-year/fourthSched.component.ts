import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  OnInit,
} from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';

//^ SERVICE
import { SharedService } from 'src/app/_services/shared.service';
import { AlertService } from '@app/_services';
import { TeacherService } from '@app/_services/teacher.service';

import { Teachers } from '@app/_models/teachers';

import { first } from 'rxjs';
import * as $ from 'jquery';

import { SubjectService, Subject } from '@app/_services/subjects.service';

@Component({
  templateUrl: 'fourthSched.component.html',
})
export class fourthSchedComponent implements AfterViewInit {
  @ViewChild('schedulerReference4')
  scheduler4!: jqxSchedulerComponent;

  teachers: Teachers[] = [];
  conflicts: any[] = [];
  subjects: Subject[] = [];

  constructor(
    private sharedService: SharedService,
    private alertService: AlertService,
    private teacherService: TeacherService,
    private subjectService: SubjectService
  ) {}

  ngAfterViewInit(): void {
    this.scheduler4.ensureAppointmentVisible('1');
    this.loadSubjects();
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

  loadSubjects(): void {
    this.subjectService.getFourthSubjects().subscribe((data) => {
      this.subjects = data;
    });
  }

  generateAppointments(): any {
    this.sharedService.getFourthSchedules().subscribe({
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
        this.scheduler4.source(this.dataAdapter);

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

    this.sharedService.addFourthSchedule(newAppointment).subscribe({
      next: (response) => {
        // this.alertService.success('Success adding schedule', {
        //   keepAfterRouteChange: true,
        // });
        appointment.id = response.id;

        this.source.localdata.push(appointment);
        this.scheduler4.source(this.dataAdapter);

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
      .updateFourthSchedule(appointment.id, updatedAppointment)
      .subscribe({
        next: (response) => {
          // Handle successful update
          console.log('Appointment updated successfully', response);
          this.source.localdata = this.source.localdata.map(
            (item: { id: any }) =>
              item.id === appointment.id ? updatedAppointment : item
          );
          this.scheduler4.source(this.dataAdapter);
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
      this.sharedService.deleteFourthSchedule(appointment.id).subscribe({
        next: () => {
          console.log('Appointment deleted successfully');
          // Remove the appointment from the local data source
          this.source.localdata = this.source.localdata.filter(
            (item: { id: any }) => item.id !== appointment.id
          );
          this.scheduler4.source(this.dataAdapter);
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
            
          </select>
        </div>
      </div>`;
    fields.subjectContainer.append(subjectCodeContainer);

    const subjectCode = document.getElementById('subjectCode');

    if (subjectCode) {
      this.subjects.forEach((subjects: any) => {
        let option = document.createElement('option');
        option.value = `${subjects.subject_code}`;
        option.text = `${subjects.subject_code} `;
        subjectCode.appendChild(option);
      });
    }

    let subjectInput = `
    <div class="jqx-scheduler-edit-dialog-label">Subject</div>
      <div class="jqx-scheduler-edit-dialog-field">
        <select id="subject" name="subject">
        
        </select>
      </div>
 `;

    fields.subjectContainer.append(subjectInput);

    const subject = document.getElementById('subject');

    if (subject) {
      this.subjects.forEach((subjects: any) => {
        let option = document.createElement('option');
        option.value = `${subjects.subject}`;
        option.text = `${subjects.subject} `;
        subject.appendChild(option);
      });
    }

    let unitsContainer = ` <div>
        <div class="jqx-scheduler-edit-dialog-label">Units</div>
        <div class="jqx-scheduler-edit-dialog-field">
          <select id="units" name="units">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="6">6</option>
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
        <option value="Room 309">Room 309</option>
        <option value="Room 311">Room 311</option>
        <option value="Room 312">Room 312</option>
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
