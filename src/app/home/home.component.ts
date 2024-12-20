import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
import { User } from '@app/_models';
import { AccountService, AlertService } from '@app/_services';

import { CalendarService } from '@app/_services/calendar.service';
import { QuoteService } from '@app/_services/quote.service'; // Import the service

@Component({
  templateUrl: 'home.component.html',
  // standalone: true,
  // imports: [],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('schedulerReference')
  schedulerHome!: jqxSchedulerComponent;
  user?: User | null;
  // loading = true;
  appointments: any[] = [];
  dailyQuote: string = ''; // Holds the daily quote
  dailyAuthor: string = ''; // Holds the author
  currentDate: Date = new Date(); // Tracks the current date for filtering

  constructor(
    private accountService: AccountService,
    private alertService: AlertService,
    private calendarService: CalendarService,
    private quoteService: QuoteService
  ) {
    this.user = this.accountService.userValue;
  }

  fetchDailyQuote(): void {
    this.quoteService.getDailyQuote().subscribe(
      (data) => {
        // Assuming the API returns an array of quotes
        if (data && data.length > 0) {
          this.dailyQuote = data[0].q; // Quote text
          this.dailyAuthor = data[0].a; // Author name
        }
      },
      (error) => {
        console.error('Error fetching the quote of the day:', error);
      }
    );
  }

  ngAfterViewInit(): void {
    this.schedulerHome.ensureAppointmentVisible('1');
    this.fetchDailyQuote();

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

  //^ GET APPOINTMENT
  generateAppointments(): any {
    this.calendarService.getCalendar().subscribe({
      next: (data) => {
        const appointments = data.map((event) => ({
          id: event.id.toString(),
          subject: event.subject,
          location: event.location,
          start: new Date(event.start),
          end: new Date(event.end),
          draggable: false,
          resizable: false,
          background: event.background,
        }));

        this.appointments = appointments.sort(
          (a, b) => a.start.getTime() - b.start.getTime()
        );
        this.source.localdata = appointments;
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.schedulerHome.source(this.dataAdapter);
      },
      error: () => {
        console.error('Error loading events:');
      },
    });
  }

  //^ ADD APPOINTMENT
  AppointmentAdd(event: any): void {
    const appointment = event.args.appointment.originalData;

    // const eventData = $('#event').val();

    const newAppointment = {
      location: appointment.location,
      subject: appointment.subject,
      start: new Date(appointment.start),
      end: new Date(appointment.end),
      day: appointment.dayName,
      background: appointment.background,
    };

    this.calendarService.addCalendar(newAppointment).subscribe({
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
      },
    });
  }

  //^ UPDATE APPOINTMENT
  AppointmentUpdate(event: any): void {
    const appointment = event.args.appointment.originalData;

    const updatedAppointment = {
      location: appointment.location,
      subject: appointment.subject,
      start: new Date(appointment.start),
      end: new Date(appointment.end),
      day: appointment.dayName,
      background: appointment.background,
    };

    // Assume appointment.id is available in the event or the originalData
    this.calendarService
      .updateCalendar(appointment.id, updatedAppointment)
      .subscribe({
        next: (response) => {
          // Handle successful update
          console.log('Appointment updated successfully', response);
          this.source.localdata = this.source.localdata.map(
            (item: { id: any }) =>
              item.id === appointment.id ? updatedAppointment : item
          );
          this.schedulerHome.source(this.dataAdapter);
          localStorage.setItem('scheduleUpdated', 'true');
          window.location.reload();
        },
        error: (error) => {
          // Handle error during update
          console.error('Error updating appointment', error);
        },
      });
  }

  //^ DELETE
  AppointmentDelete(event: any): void {
    const appointment = event.args.appointment.originalData;

    if (confirm('Are you sure you want to delete this appointment?')) {
      this.calendarService.deleteCalendar(appointment.id).subscribe({
        next: () => {
          console.log('Appointment deleted successfully');
          // Remove the appointment from the local data source
          this.source.localdata = this.source.localdata.filter(
            (item: { id: any }) => item.id !== appointment.id
          );
          this.schedulerHome.source(this.dataAdapter);
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

  editDialogOpen = (dialog: any, fields: any, editAppointment: any) => {
    fields.subjectLabel.html('Event');
    fields.statusContainer.hide();
    fields.timeZoneContainer.hide();
    fields.allDayContainer.hide();
    fields.resetExceptionsContainer.hide();
    fields.repeatContainer.hide();
    fields.descriptionContainer.hide();

    setTimeout(() => {
      $(dialog).closest('.jqx-window').addClass('center-fixed-dialog');
    }, 10);
  };

  source: any = {
    dataType: 'array',
    localData: this.generateAppointments(),
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'subject', type: 'string' },
      { name: 'location', type: 'string' },
      { name: 'start', type: 'date' },
      { name: 'draggable', type: 'boolean' },
      { name: 'resizable', type: 'boolean' },
      { name: 'background', type: 'string' },
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
    location: 'location',
    subject: 'subject',
    draggable: 'draggable',
    resizable: 'resizable',
    background: 'background',
  };
  resources: any = {
    colorScheme: 'scheme05',
    dataField: 'calendar',
    source: new jqx.dataAdapter(this.source),
  };
  views: any[] = [{ type: 'monthView' }];
}
