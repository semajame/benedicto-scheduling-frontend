import { AfterViewInit, Component } from '@angular/core';
import { CcsService } from '@app/_services/ccs.service';
import { schedule } from '@app/_models/schedule';

import { DatePipe } from '@angular/common';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { forkJoin } from 'rxjs';

@Component({
  templateUrl: 'firstEnlistment.component.html',
  providers: [DatePipe], // Add DatePipe to providers
})
export class firstEnlistmentComponent implements AfterViewInit {
  schedule: schedule[] = [];
  minorSubjects: any[] = []; // Declare minorSubjects as an array

  constructor(private ccsService: CcsService, private datePipe: DatePipe) {}

  ngAfterViewInit(): void {
    forkJoin({
      schedules: this.ccsService.getFirstSchedules(),
      minorSubjects: this.ccsService.findMinorSubjectsITFirstYear(),
    }).subscribe(({ schedules, minorSubjects }) => {
      // Process schedule data
      this.schedule = schedules.map((item) => {
        item.start = this.datePipe.transform(new Date(item.start), 'h:mm a');
        item.end = this.datePipe.transform(new Date(item.end), 'h:mm a');
        return item;
      });

      const processedMinorSubjects = minorSubjects.map((item) => {
        item.start = this.datePipe.transform(new Date(item.start), 'h:mm a');
        item.end = this.datePipe.transform(new Date(item.end), 'h:mm a');
        return item;
      });

      // Merge schedules and minorSubjects into a single array
      this.schedule = [...this.schedule, ...processedMinorSubjects];
    });
  }

  generatePDF() {
    const doc = new jsPDF('landscape'); // Use landscape for wide tables

    // Table Content
    autoTable(doc, {
      startY: 20,
      head: [
        ['COURSE CODE', 'COURSE DESCRIPTION', 'UNITS', 'DAY', 'TIME', 'ROOM'],
      ],
      body: this.schedule.map((schedules) => [
        schedules.subject_code, // COURSE CODE
        schedules.subject, // COURSE DESCRIPTION
        schedules.units, // UNITS
        schedules.day, // DAY
        `${schedules.start} - ${schedules.end}`, // TIME
        schedules.room, // ROOM
      ]),
    });

    // Save the PDF as a file
    doc.save('enlistment.pdf'); // Replace 'schedule.pdf' with your desired file name
  }
}
