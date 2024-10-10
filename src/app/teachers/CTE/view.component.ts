import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../_services/teacher.service';
import { Teachers } from '../../_models/teachers';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({ templateUrl: 'view.component.html', providers: [DatePipe] })
export class CTEviewComponent implements OnInit {
  teacher?: Teachers;
  loading = false;
  id?: string;

  schedules: any[] = [];
  teacherId?: number;

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
        this.schedules = data.map((item) => {
          // Convert start and end to Date objects and format to AM/PM
          item.start = this.datePipe.transform(new Date(item.start), 'h:mm a');
          item.end = this.datePipe.transform(new Date(item.end), 'h:mm a');
          return item;
        });
      },
      (error) => {
        console.error('Error fetching schedules:', error);
      }
    );
  }
}
