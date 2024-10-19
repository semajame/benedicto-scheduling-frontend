import { AfterViewInit, Component } from '@angular/core';
import { CoeService } from '@app/_services/coe.service';
import { schedule } from '@app/_models/schedule';
import { DatePipe } from '@angular/common';

@Component({
  templateUrl: 'thirdEnlistment.component.html',
  providers: [DatePipe], // Add DatePipe to providers
})
export class bsiethirdEnlistmentComponent implements AfterViewInit {
  schedule: schedule[] = [];

  constructor(private coeService: CoeService, private datePipe: DatePipe) {}

  ngAfterViewInit(): void {
    this.coeService.getThirdBsieSchedules().subscribe((data) => {
      this.schedule = data.map((item) => {
        // Convert start and end to Date objects and format to AM/PM
        item.start = this.datePipe.transform(new Date(item.start), 'h:mm a');
        item.end = this.datePipe.transform(new Date(item.end), 'h:mm a');
        return item;
      });
    });
  }
}
