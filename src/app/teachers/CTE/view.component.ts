import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../_services/teacher.service';
import { Teachers } from '../../_models/teachers';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({ templateUrl: 'view.component.html', providers: [DatePipe] })
export class CTEviewComponent implements OnInit {
  teacher?: Teachers;
  loading = false;
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

  generatePDF() {
    const doc = new jsPDF();

    // Title
    doc.text(this.teacher?.name || 'Teacher', 10, 10);

    // Table Content
    autoTable(doc, {
      startY: 20,
      head: [
        ['Subject Code', 'Subject', 'Units', 'Room', 'Start', 'End', 'Day'],
      ],
      body: this.schedules.map((schedule) => [
        schedule.subject_code,
        schedule.subject,
        schedule.units,
        schedule.room,
        schedule.start,
        schedule.end,
        schedule.day,
      ]),
    });

    doc.text(
      `Total Hours: ${this.totalCumulativeHours.toFixed(2)} hours`,
      10,
      +260
    );

    // Open the PDF in a new tab
    doc.save(`${this.teacher?.name}.pdf`); // to download the PDF
  }
}
