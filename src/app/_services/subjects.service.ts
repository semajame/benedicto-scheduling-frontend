import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Subject {
  subject_code: string;
  subject: string;
  units: number;
  pre_req?: string;
  year: string;
}

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private apiUrl = 'https://benedicto-scheduling-backend.onrender.com/subjects'; // Change to your backend URL

  constructor(private http: HttpClient) {}

  //^ IT subjects
  getBsitSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(
      `${this.apiUrl}/bachelor-of-information-technology`
    );
  }

  //^ BSED subjects
  getBsedSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(
      `${this.apiUrl}/bachelor-of-secondary-education`
    );
  }

  getBeedSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(
      `${this.apiUrl}/bachelor-of-elementary-education`
    );
  }
}
