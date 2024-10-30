import { AfterViewInit, Component } from '@angular/core';
import { CcsService } from '@app/_services/ccs.service';
import { schedule } from '@app/_models/schedule';
import { DatePipe } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  templateUrl: 'thirdEnlistment.component.html',
  providers: [DatePipe], // Add DatePipe to providers
})
export class thirdEnlistmentComponent implements AfterViewInit {
  schedule: schedule[] = [];
  minorSubjects: any[] = []; // Declare minorSubjects as an array

  constructor(private ccsService: CcsService, private datePipe: DatePipe) {}

  ngAfterViewInit(): void {
    forkJoin({
      schedules: this.ccsService.getThirdSchedules(),
      minorSubjects: this.ccsService.findMinorSubjectsITThirdYear(),
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
