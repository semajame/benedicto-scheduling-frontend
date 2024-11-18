import { AfterViewInit, Component } from '@angular/core';
import { CbmService } from '@app/_services/cbm.service';
import { schedule } from '@app/_models/schedule';
import { DatePipe } from '@angular/common';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  templateUrl: 'fourthEnlistment.component.html',
  providers: [DatePipe], // Add DatePipe to providers
})
export class bsmmfourthEnlistmentComponent implements AfterViewInit {
  schedule: schedule[] = [];

  constructor(private cbmService: CbmService, private datePipe: DatePipe) {}

  ngAfterViewInit(): void {
    this.cbmService.getFourthBsmmSchedules().subscribe((data) => {
      this.schedule = data.map((item) => {
        // Convert start and end to Date objects and format to AM/PM
        item.start = this.datePipe.transform(new Date(item.start), 'h:mm a');
        item.end = this.datePipe.transform(new Date(item.end), 'h:mm a');
        return item;
      });
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
