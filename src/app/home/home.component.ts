import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
import { User } from '@app/_models';
import { AccountService, AlertService } from '@app/_services';

import { SharedService } from 'src/app/_services/shared.service';

@Component({
  templateUrl: 'home.component.html',
  // standalone: true,
  // imports: [],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('schedulerReference')
  schedulerHome!: jqxSchedulerComponent;
  user?: User | null;

  constructor(
    private accountService: AccountService,
    private alertService: AlertService,
    private sharedService: SharedService
  ) {
    this.user = this.accountService.userValue;
  }

  ngAfterViewInit(): void {
    this.schedulerHome.ensureAppointmentVisible('1');

    //^ ADD ALERT
    if (localStorage.getItem('scheduleAdded') === 'true') {
      // Display the success alert
      this.alertService.success('Added Event successful', {
        keepAfterRouteChange: true,
      });

      // Remove the flag from localStorage to prevent repeated alerts
      localStorage.removeItem('scheduleAdded');
    }

    //^ UPDATED ALERT
    if (localStorage.getItem('scheduleUpdated') === 'true') {
      // Display the success alert
      this.alertService.success('Updated Event successful', {
        keepAfterRouteChange: true,
      });

      // Remove the flag from localStorage to prevent repeated alerts
      localStorage.removeItem('scheduleUpdated');
    }

    //^ DELETE ALERT
    if (localStorage.getItem('scheduleDeleted') === 'true') {
      // Display the success alert
      this.alertService.success('Delete Event successful', {
        keepAfterRouteChange: true,
      });

      // Remove the flag from localStorage to prevent repeated alerts
      localStorage.removeItem('scheduleDeleted');
    }
  }

  generateAppointments(): any {
    this.sharedService.getCalendar().subscribe({
      next: (data) => {
        const appointments = data.map((event) => ({
          id: event.id.toString(),
          location: event.location(),
          event: event.event(),
          start: new Date(event.start),
          end: new Date(event.end),
          day: event.dayName,
          draggable: false,
          resizable: false,
          background: event.background,
        }));

        // Load the appointments into the scheduler (if needed)
        this.source.localdata = appointments;
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.schedulerHome.source(this.dataAdapter);

        // Log conflicts if any
      },
      error: () => {
        this.alertService.error('Error loading events', {
          keepAfterRouteChange: true,
        });
        console.error('Error loading events:');
      },
    });
  }

  AppointmentAdd(event: any): void {
    const appointment = event.args.appointment.originalData;

    const newAppointment = {
      location: appointment.location,
      event: appointment.event,
      start: new Date(appointment.start),
      end: new Date(appointment.end),
      day: appointment.dayName,
      draggable: false,
      resizable: false,
      background: appointment.background,
    };

    this.sharedService.addCalendar(newAppointment).subscribe({
      next: (response) => {
        appointment.id = response.id;

        this.source.localdata.push(appointment);
        this.schedulerHome.source(this.dataAdapter);

        localStorage.setItem('scheduleAdded', 'true');

        window.location.reload();
      },

      error: (error) => {
        this.alertService.error('Error adding schedule', {
          keepAfterRouteChange: true,
          error,
        });

        // window.location.reload();
        console.log('asdasd');
      },
    });
  }

  editDialogOpen = (dialog: any, fields: any, editAppointment: any) => {
    fields.descriptionContainer.hide();
    fields.subjectLabel.html('Event');
    fields.statusContainer.hide();
    fields.timeZoneContainer.hide();
    fields.allDayContainer.hide();
    fields.resetExceptionsContainer.hide();
    fields.repeatContainer.hide();
  };

  source: any = {
    dataType: 'array',
    localData: this.generateAppointments(),
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'event', type: 'string' },
      { name: 'location', type: 'string' },
      { name: 'start', type: 'date' },
      { name: 'draggable', type: 'boolean' },
      { name: 'resizable', type: 'boolean' },
      { name: 'end', type: 'date' },
    ],
    id: 'id',
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);
  date: any = new jqx.date();

  appointmentDataFields: any = {
    from: 'start',
    to: 'end',
    id: 'id',
    event: 'event',
    location: 'location',
    subject: 'subject',
    draggable: 'draggable',
    resizable: 'resizable',
  };
  resources: any = {
    colorScheme: 'scheme05',
    dataField: 'calendar',
    source: new jqx.dataAdapter(this.source),
  };
  views: any[] = [{ type: 'monthView' }];
}
