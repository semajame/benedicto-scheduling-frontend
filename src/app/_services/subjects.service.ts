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
  private apiUrl = 'http://localhost:4000/subjects'; // Change to your backend URL

  constructor(private http: HttpClient) {}

  //^ IT subjects
  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.apiUrl}/1st-year`);
  }

  getSecondSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.apiUrl}/2nd-year`);
  }

  getThirdSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.apiUrl}/3rd-year`);
  }

  getFourthSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.apiUrl}/4th-year`);
  }

  //^ BSED subjects
  getBsedSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(
      `${this.apiUrl}/bachelor-of-secondary-education`
    );
  }
}
