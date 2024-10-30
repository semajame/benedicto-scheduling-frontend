import { AfterViewInit, Component } from '@angular/core';
import { CbmService } from '@app/_services/cbm.service';
import { schedule } from '@app/_models/schedule';
import { DatePipe } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  templateUrl: 'secondEnlistment.component.html',
  providers: [DatePipe], // Add DatePipe to providers
})
export class bsmmsecondEnlistmentComponent implements AfterViewInit {
  schedule: schedule[] = [];
  minorSubjects: any[] = []; // Declare minorSubjects as an array

  constructor(private cbmService: CbmService, private datePipe: DatePipe) {}

  ngAfterViewInit(): void {
    forkJoin({
      schedules: this.cbmService.getSecondBsmmSchedules(),
      minorSubjects: this.cbmService.findMinorSubjectsBsmmSecondYear(),
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
}
