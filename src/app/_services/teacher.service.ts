import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

// import { environment } from '@environments/environment';
import { environment } from '../environments/environment';
import { Teachers } from '../_models/teachers';

const baseUrl = `${environment.apiUrl}/external`;

@Injectable({ providedIn: 'root' })
export class TeacherService {
  private teacherSubject: BehaviorSubject<Teachers | null>;
  public teachers: Observable<Teachers | null>;

  constructor(private router: Router, private http: HttpClient) {
    this.teacherSubject = new BehaviorSubject<Teachers | null>(null);
    this.teachers = this.teacherSubject.asObservable();
  }

  public get teacherValue(): Teachers | null {
    return this.teacherSubject.value;
  }

  getInstructors(
    campusName: string,
    departmentName: string
  ): Observable<Teachers[]> {
    return this.http.get<Teachers[]>(
      `${baseUrl}/datas/campus/${campusName}/department/${departmentName}`
    );
  }

  getTeacherByName(name: string): Observable<Teachers | null> {
    return this.http
      .get<Teachers[]>(
        `${baseUrl}/datas/teachers/search?name=${encodeURIComponent(name)}`
      )
      .pipe(
        map((response) => {
          const teachers = Array.isArray(response) ? response : [response]; // Ensure teachers is always an array
          const teacher = teachers.find((teacher) => teacher.name === name);
          return teacher || null;
        })
      );
  }

  getTeacherById(employee_id: number): Observable<any> {
    return this.http.get(`${baseUrl}/datas/teacher/${employee_id}`);
  }

  getTeacherSchedules(teacher: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${environment.apiUrl}/schedule/teacher/${teacher}`
    );
  }
}
