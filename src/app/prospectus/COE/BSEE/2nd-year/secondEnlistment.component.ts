import { AfterViewInit, Component } from '@angular/core';
import { CoeService } from '@app/_services/coe.service';
import { CcsService } from '@app/_services/ccs.service';
import { schedule } from '@app/_models/schedule';
import { DatePipe } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  templateUrl: 'secondEnlistment.component.html',
  providers: [DatePipe], // Add DatePipe to providers
})
export class bseesecondEnlistmentComponent implements AfterViewInit {
  schedule: schedule[] = [];
  minorSubjects: any[] = []; // Declare minorSubjects as an array
  technoSubject: any[] = []; // Declare technoSubject as an array

  constructor(
    private coeService: CoeService,
    private ccsService: CcsService,
    private datePipe: DatePipe
  ) {}

  ngAfterViewInit(): void {
    forkJoin({
      schedules: this.coeService.getSecondBseeSchedules(),
      technoSubject: this.ccsService.findTechnoForCoe(),
      minorSubjects: this.coeService.findMinorSubjectsBseeSecondYear(),
    }).subscribe(({ schedules, minorSubjects, technoSubject }) => {
      // Process schedule data
      this.schedule = schedules.map((item) => {
        item.start = this.datePipe.transform(new Date(item.start), 'h:mm a');
        item.end = this.datePipe.transform(new Date(item.end), 'h:mm a');
        return item;
      });

      // Process minorSubjects data
      const processedMinorSubjects = minorSubjects.map((item) => {
        item.start = this.datePipe.transform(new Date(item.start), 'h:mm a');
        item.end = this.datePipe.transform(new Date(item.end), 'h:mm a');
        return item;
      });

      // Process technoSubject data
      const processedTechnoSubjects = technoSubject.map((item) => {
        item.start = this.datePipe.transform(new Date(item.start), 'h:mm a');
        item.end = this.datePipe.transform(new Date(item.end), 'h:mm a');
        return item;
      });

      // Merge all arrays into schedule
      this.schedule = [
        ...this.schedule,
        ...processedMinorSubjects,
        ...processedTechnoSubjects,
      ];
    });
  }
}
