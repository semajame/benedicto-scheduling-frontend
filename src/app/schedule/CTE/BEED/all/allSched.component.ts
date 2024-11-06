import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
import { CteService } from '@app/_services/cte.service';

import { AlertService } from '@app/_services';
import { Teachers } from '@app/_models/teachers';

import { first, forkJoin } from 'rxjs';
import { SubjectService } from '@app/_services/subjects.service';
import { Subjects } from '@app/_models/subjects';
import { Room } from '@app/_models/rooms';
import { Role } from '@app/_models/role';
import { User } from '@app/_models';
import { AccountService } from '@app/_services';
import * as $ from 'jquery';
import { TeacherService } from '@app/_services/teacher.service';

@Component({
  templateUrl: 'allSched.component.html',
})
export class beedSchedComponent implements AfterViewInit {
  @ViewChild('schedulerReference5')
  scheduler5!: jqxSchedulerComponent;
  teachers: Teachers[] = [];
  rooms: Room[] = [];
  conflicts: any[] = [];
  subjects: Subjects[] = [];
  role: Role = Role.CEA; // or dynamically set this
  Role = Role;
  user?: User | null;

  constructor(
    private cteService: CteService,
    private alertService: AlertService,
    private accountService: AccountService,
    private teacherService: TeacherService,
    private subjectService: SubjectService
  ) {}

  ngAfterViewInit(): void {
    this.role = this.accountService.userValue?.user?.role as Role;
    this.generateAppointments();
    this.scheduler5.ensureAppointmentVisible('1');
    this.teacherService
      .getInstructors('Mandaue Campus', 'College of Education and Arts')
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

  //^ GET APPOINTMENT
  generateAppointments(): any {
    this.cteService.getAllBeedSchedules().subscribe({
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
              // appointment1.room === appointment2.room &&
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
                  reccurencePattern: appointment1.recurrencePattern,
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
                  reccurencePattern: appointment2.recurrencePattern,
                });
              }
            }
          });
        });

        // Load the appointments into the scheduler (if needed)
        this.source.localdata = appointments;
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.scheduler5.source(this.dataAdapter);

        // Log conflicts if any
        if (this.conflicts.length > 0) {
          this.alertService.error('Schedule conflicts found', {
            keepAfterRouteChange: true,
          });
        }
      },
      error: (error) => {
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
    const teacher = $('#teacher').val(); // teacher could be string | number | string[] | undefined
    const year = $('#year').val();

    const startDate = new Date(appointment.start);

    if (typeof subject_code !== 'string') {
      console.error('Invalid subject code:', subject_code);
      return; // Exit early if subject_code is not a string
    }

    // Days of the week mapping
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

    const dayName = dayNames.join('');

    // Fetch `subject_id` based on subject_code
    this.subjectService.searchSubjectsBySubjectCode(subject_code).subscribe({
      next: (subjectData) => {
        if (subjectData && subjectData.course_id) {
          const course_id = subjectData.course_id;

          // Type guard to ensure teacher is a string
          if (typeof teacher === 'string') {
            // Fetch `teacher_id` based on teacher name
            this.teacherService.getTeacherByName(teacher).subscribe({
              next: (teacherData) => {
                if (teacherData && teacherData.employee_id) {
                  const newAppointment = {
                    subject_id: course_id, // Populate subject_id with retrieved subject_id
                    subject_code: subject_code,
                    subject: subject,
                    teacher: teacher,
                    units: units,
                    room: room,
                    teacher_id: teacherData.employee_id, // Populate teacher_id with employee_id
                    year: year,
                    start: new Date(startDate),
                    end: new Date(appointment.end),
                    recurrencePattern: recurrencePattern || null,
                    day: dayName,
                    background: appointment.background,
                  };

                  console.log(newAppointment);

                  this.cteService.addAllBeedSchedule(newAppointment).subscribe({
                    next: (response) => {
                      appointment.id = response.id;
                      this.source.localdata.push(appointment);
                      this.scheduler5.source(this.dataAdapter);
                      localStorage.setItem('scheduleAdded', 'true');
                      window.location.reload();
                    },
                    error: (error) => {
                      this.alertService.error('Error adding schedule', {
                        keepAfterRouteChange: true,
                        error,
                      });

                      console.error('Error adding schedule:', error.message);
                      console.error('Error details:', error); // Log full error for troubleshooting
                    },
                  });
                } else {
                  console.error('Employee ID not found for teacher:', teacher);
                }
              },
              error: (error) => {
                console.error('Error fetching teacher by name:', error);
              },
            });
          } else {
            console.error('Invalid teacher name:', teacher);
          }
        } else {
          console.error('Subject ID not found for subject code:', subject_code);
        }
      },
      error: (error) => {
        console.error('Error fetching subject by code:', error);
      },
    });
  }

  //^ UPDATE APPOINTMENT
  AppointmentUpdate(event: any): void {
    const appointment = event.args.appointment.originalData;
    const subject_code = $('#subjectCode').val();
    const units = $('#units').val();
    const subject = $('#subject').val();
    const room = $('#room').val();
    const teacher = $('#teacher').val();
    const year = $('#year').val();

    if (typeof subject_code !== 'string') {
      console.error('Invalid subject code:', subject_code);
      return; // Exit early if subject_code is not a string
    }

    const startDate = new Date(appointment.start);
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

    // Fetch `subject_id` and `teacher_id` in a chained manner
    this.subjectService.searchSubjectsBySubjectCode(subject_code).subscribe({
      next: (subjectData) => {
        const course_id = subjectData?.course_id;
        if (!course_id) {
          console.error('Subject ID not found for subject code:', subject_code);
          return;
        }

        if (typeof teacher !== 'string') {
          console.error('Invalid teacher name:', teacher);
          return;
        }

        this.teacherService.getTeacherByName(teacher).subscribe({
          next: (teacherData) => {
            const teacher_id = teacherData?.employee_id;
            if (!teacher_id) {
              console.error('Employee ID not found for teacher:', teacher);
              return;
            }

            // Create the updated appointment data
            const updatedAppointment = {
              subject_id: course_id,
              subject_code: subject_code,
              subject: subject,
              teacher: teacher,
              units: units,
              room: room,
              teacher_id: teacher_id,
              year: year,
              start: new Date(startDate),
              end: new Date(appointment.end),
              recurrencePattern: recurrencePattern || null,
              day: dayName,
              background: appointment.background,
            };

            // Update the appointment
            this.cteService
              .updateAllBeedSchedule(appointment.id, updatedAppointment)
              .subscribe({
                next: (response) => {
                  // Handle successful update
                  console.log('Appointment updated successfully', response);
                  this.source.localdata = this.source.localdata.map(
                    (item: { id: any }) =>
                      item.id === appointment.id ? updatedAppointment : item
                  );
                  this.scheduler5.source(this.dataAdapter);
                  localStorage.setItem('scheduleUpdated', 'true');
                  window.location.reload();
                },
                error: (error) => {
                  // Handle error during update
                  console.error('Error updating appointment', error);
                },
              });
          },
          error: (error) =>
            console.error('Error fetching teacher by name:', error),
        });
      },
      error: (error) => console.error('Error fetching subject by code:', error),
    });
  }

  //^ DELETE APPOINTMENT
  AppointmentDelete(event: any): void {
    const appointment = event.args.appointment.originalData;

    if (confirm('Are you sure you want to delete this appointment?')) {
      this.cteService.deleteAllBeedSchedule(appointment.id).subscribe({
        next: () => {
          console.log('Appointment deleted successfully');
          // Remove the appointment from the local data source
          this.source.localdata = this.source.localdata.filter(
            (item: { id: any }) => item.id !== appointment.id
          );
          this.scheduler5.source(this.dataAdapter);
          localStorage.setItem('scheduleDeleted', 'true');

          window.location.reload();
        },
        error: (error) => {
          window.location.reload();
          this.alertService.error('Error deleting schedule', {
            keepAfterRouteChange: true,
            error,
          });
          console.log(error);
        },
      });
    }
  }

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

  editDialogCreate = (dialog: any, fields: any, editAppointment: any) => {
    const loadSubjects = async () => {
      try {
        // Fetch subjects filtered by department code
        this.subjectService
          .getSubjects('CEA') // Ensure this returns Observable<Subjects[]>
          .subscribe({
            next: (data: Subjects[]) => {
              // Use Subjects[] directly
              console.log('Subjects filtered by department code:', data);
              this.subjects = data;

              // Build the subject code container and populate the dropdown after fetching data
              let subjectCodeContainer = `
                <div>
                  <div class="jqx-scheduler-edit-dialog-label pr-0" style="">Subject Code</div>
                  <div class="jqx-scheduler-edit-dialog-field">
                    <select id="subjectCode" name="subjectCode"></select>
                  </div>
                </div>
              `;

              fields.subjectContainer.append(subjectCodeContainer);

              const subjectSelect = document.getElementById('subjectCode');

              if (subjectSelect) {
                this.subjects.forEach((subject) => {
                  let option = document.createElement('option');
                  option.value = `${subject.courseCode}`; // Assuming your API returns courseCode
                  option.text = `${subject.courseCode}`; // Modify as needed
                  subjectSelect.appendChild(option);
                });
              }

              let subjectInput = `
              <div class="jqx-scheduler-edit-dialog-label">Subject</div>
                <div class="jqx-scheduler-edit-dialog-field">
                  <select id="subject" name="subject" >
                   
                  </select>
                </div>
           `;

              fields.subjectContainer.append(subjectInput);

              const subjectDesc = document.getElementById('subject');

              if (subjectDesc) {
                this.subjects.forEach((subject) => {
                  let option = document.createElement('option');
                  option.value = `${subject.courseDescription}`;
                  option.text = `${subject.courseDescription} `;
                  subjectDesc.appendChild(option);
                });
              }

              let unitsContainer = ` <div>
              <div class="jqx-scheduler-edit-dialog-label">Units</div>
              <div class="jqx-scheduler-edit-dialog-field">
                <select id="units" name="units" >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>`;
              fields.subjectContainer.append(unitsContainer);

              let yearContainer = ` <div>
          <div class="jqx-scheduler-edit-dialog-label">Year</div>
          <div class="jqx-scheduler-edit-dialog-field">
            <select id="year" name="year" >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>`;

              fields.subjectContainer.append(yearContainer);

              this.subjectService.getRooms().subscribe((data: Room[]) => {
                this.rooms = data;

                // Build the teacher container and populate the dropdown after fetching data
                let roomContainer = ` <div>
                <div class="jqx-scheduler-edit-dialog-label">Room</div>
                <div class="jqx-scheduler-edit-dialog-field">
                  <select id="room" name="room" >
                    
                  </select>
                </div>
              </div>`;
                fields.subjectContainer.append(roomContainer);

                const roomSelect = document.getElementById('room');

                if (roomSelect) {
                  this.rooms.forEach((room) => {
                    let option = document.createElement('option');
                    option.value = `${room.roomName}`; // Assuming your API returns firstName and lastName
                    option.text = `${room.roomName} `;
                    roomSelect.appendChild(option);
                  });
                }
              });
            },
            error: (error) => {
              console.error('Error fetching subjects:', error);
            },
          });

        setTimeout(() => {
          this.teacherService
            .getInstructors('Mandaue Campus', 'College of Education and Arts')
            .subscribe((data: Teachers[]) => {
              console.log('Teachers filtered by campus and department:', data);
              this.teachers = data;

              // Build the teacher container and populate the dropdown after fetching data
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
                this.teachers.forEach((teacher) => {
                  let option = document.createElement('option');
                  option.value = `${teacher.name}`; // Assuming your API returns firstName and lastName
                  option.text = `${teacher.name} `;
                  teacherSelect.appendChild(option);
                });
              }
            });
        }, 800); // 1 second delay
      } catch (error) {
        console.error('Error fetching subjects:', error);
      }
    };

    // Call the function to load subjects when needed
    loadSubjects();
  };

  editDialogOpen = (dialog: any, fields: any, editAppointment: any) => {
    fields.subject.hide();
    fields.subjectLabel.hide();
    fields.descriptionContainer.hide();
    fields.statusContainer.hide();
    fields.timeZoneContainer.hide();
    fields.allDayContainer.hide();
    fields.locationContainer.hide();
    fields.resetExceptionsContainer.hide();
    fields.yearly.panel.hide();

    setTimeout(() => {
      $(dialog)
        .find('.jqx-scheduler-recurrence-yearly-panel')
        .addClass('recurrence-hide');

      // $(dialog).find('.jqx-window-content').addClass('disabled');

      // $(dialog).find('.jqx-scheduler-edit-dialog-field').addClass('disabled');

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
        $('#year').val(appointmentData.year);
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
