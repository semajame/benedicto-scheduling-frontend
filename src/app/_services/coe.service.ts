import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoeService {
  readonly APIBSME = `${environment.apiUrl}/schedule/mechanical-engineering`;
  readonly APIBSIE = `${environment.apiUrl}/schedule/industrial-engineering`;
  readonly APIBSCE = `${environment.apiUrl}/schedule/civil-engineering`;
  readonly APIBSEE = `${environment.apiUrl}/schedule/electrical-engineering`;

  constructor(private http: HttpClient) {}

  //^ ALL YEAR

  getAllBsmeSchedule(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSME}`);
  }

  getAllBsieSchedule(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSIE}`);
  }

  getAllBsceSchedule(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSCE}`);
  }

  getAllBseeSchedule(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSEE}`);
  }

  addBsmeSchedule(schedule: any): Observable<any> {
    return this.http.post<any>(`${this.APIBSME}`, schedule);
  }

  addBsieSchedule(schedule: any): Observable<any> {
    return this.http.post<any>(`${this.APIBSIE}`, schedule);
  }

  addBsceSchedule(schedule: any): Observable<any> {
    return this.http.post<any>(`${this.APIBSCE}`, schedule);
  }

  addBseeSchedule(schedule: any): Observable<any> {
    return this.http.post<any>(`${this.APIBSEE}`, schedule);
  }

  updateBsmeSchedule(id: number, schedule: any): Observable<any> {
    return this.http.put(`${this.APIBSME}/${id}`, schedule);
  }

  updateBsieSchedule(id: number, schedule: any): Observable<any> {
    return this.http.put(`${this.APIBSIE}/${id}`, schedule);
  }

  updateBsceSchedule(id: number, schedule: any): Observable<any> {
    return this.http.put(`${this.APIBSCE}/${id}`, schedule);
  }

  updateBseeSchedule(id: number, schedule: any): Observable<any> {
    return this.http.put(`${this.APIBSEE}/${id}`, schedule);
  }

  deleteBsmeSchedule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.APIBSEE}/${id}`);
  }

  deleteBsieSchedule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.APIBSIE}/${id}`);
  }

  deleteBsceSchedule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.APIBSCE}/${id}`);
  }

  deleteBseeSchedule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.APIBSEE}/${id}`);
  }

  //* BSME
  //^ FIRST YEAR

  getFirstBsmeSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSME}/1st-year`);
  }

  //^ SECOND YEAR
  getSecondBsmeSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSME}/2nd-year`);
  }

  //^ THIRD YEAR
  getThirdBsmeSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSME}/3rd-year`);
  }

  //^ FOURTH YEAR

  getFourthBsmeSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSME}/4th-year`);
  }

  //* BSIE
  //^ FIRST YEAR

  getFirstBsieSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSIE}/1st-year`);
  }

  //^ SECOND YEAR
  getSecondBsieSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSIE}/2nd-year`);
  }

  //^ THIRD YEAR
  getThirdBsieSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSIE}/3rd-year`);
  }

  //^ FOURTH YEAR

  getFourthBsieSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSIE}/4th-year`);
  }

  //* BSCE
  //^ FIRST YEAR

  getFirstBsceSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSCE}/1st-year`);
  }

  //^ SECOND YEAR
  getSecondBsceSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSCE}/2nd-year`);
  }

  //^ THIRD YEAR
  getThirdBsceSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSCE}/3rd-year`);
  }

  //^ FOURTH YEAR

  getFourthBsceSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSCE}/4th-year`);
  }

  //* BSEE
  //^ FIRST YEAR

  getFirstBseeSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSEE}/1st-year`);
  }

  //^ SECOND YEAR
  getSecondBseeSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSEE}/2nd-year`);
  }

  //^ THIRD YEAR
  getThirdBseeSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSEE}/3rd-year`);
  }

  //^ FOURTH YEAR

  getFourthBseeSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSEE}/4th-year`);
  }

  //* MINOR SUBJECTS
  findMinorSubjectsBsme(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSME}/minor-subjects`);
  }

  findMinorSubjectsBsmeFirstYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSME}/minor-subjects/1st-year`);
  }

  findMinorSubjectsBsmeSecondYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSME}/minor-subjects/2nd-year`);
  }

  findMinorSubjectsBsmeThirdYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSME}/minor-subjects/3rd-year`);
  }

  findMinorSubjectsBsce(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSCE}/minor-subjects`);
  }

  findMinorSubjectsBsceFirstYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSCE}/minor-subjects/1st-year`);
  }

  findMinorSubjectsBsceSecondYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSCE}/minor-subjects/2nd-year`);
  }

  findMinorSubjectsBsee(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSEE}/minor-subjects`);
  }

  findMinorSubjectsBseeFirstYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSEE}/minor-subjects/1st-year`);
  }

  findMinorSubjectsBseeSecondYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSEE}/minor-subjects/2nd-year`);
  }

  findMinorSubjectsBseeThirdYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSEE}/minor-subjects/3rd-year`);
  }

  findMinorSubjectsBsie(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSIE}/minor-subjects`);
  }

  findMinorSubjectsBsieFirstYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSIE}/minor-subjects/1st-year`);
  }

  findMinorSubjectsBsieSecondYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSIE}/minor-subjects/2nd-year`);
  }

  findMinorSubjectsBsieThirdYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSIE}/minor-subjects/3rd-year`);
  }
}
