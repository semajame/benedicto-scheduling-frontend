import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../_services/teacher.service';
import { Teachers } from '../../_models/teachers';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  templateUrl: './view.component.html',
  providers: [DatePipe],
})
export class CBMviewComponent implements OnInit {
  teacher?: Teachers;
  loading = true;
  id?: string;

  schedules: any[] = [];
  teacherId?: number;
  totalCumulativeHours: number = 0; // Variable to hold the total cumulative hours

  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    const employeeId = this.route.snapshot.params['id']; // Get employee ID from the route
    if (employeeId) {
      this.loading = true; // Set loading to true while fetching data
      this.teacherService.getTeacherById(+employeeId).subscribe(
        (data) => {
          this.teacher = data; // Assign data to teacher variable
          this.loading = false; // Set loading to false

          // After the teacher data is fetched, load the schedules using teacher name
          if (this.teacher?.name) {
            this.loadTeacherSchedules(this.teacher.name); // Pass teacher's name to the function
          }
        },
        (error) => {
          console.error('Error fetching teacher:', error);
          this.loading = false; // Set loading to false
        }
      );
    }
  }

  loadTeacherSchedules(teacherName: string): void {
    this.teacherService.getTeacherSchedules(teacherName).subscribe(
      (data: any[]) => {
        this.totalCumulativeHours = 0; // Reset cumulative hours

        this.schedules = data.map((item) => {
          const startDate = new Date(item.start);
          const endDate = new Date(item.end);

          item.start = this.datePipe.transform(startDate, 'h:mm a');
          item.end = this.datePipe.transform(endDate, 'h:mm a');

          // Calculate total hours between start and end
          item.totalHours = this.calculateTotalHours(startDate, endDate);

          // Add to cumulative total hours
          this.totalCumulativeHours += item.totalHours;

          return item;
        });
      },
      (error) => {
        console.error('Error fetching schedules:', error);
      }
    );
  }

  calculateTotalHours(startDate: Date, endDate: Date): number {
    const differenceInMs = endDate.getTime() - startDate.getTime();
    return differenceInMs / (1000 * 60 * 60); //
  }
}
