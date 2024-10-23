import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CbmService {
  readonly APIBSA = `${environment.apiUrl}/schedule/accounting`;
  readonly APIBSHM = `${environment.apiUrl}/schedule/hospitality-management`;
  readonly APIBSHRM = `${environment.apiUrl}/schedule/human-resource-management`;
  readonly APIBSMM = `${environment.apiUrl}/schedule/marketing-management`;

  constructor(private http: HttpClient) {}

  //^ ALL YEAR

  getAllBsaSchedule(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSA}`);
  }

  getAllBshmSchedule(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSHM}`);
  }

  getAllBshrmSchedule(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSHRM}`);
  }

  getAllBsmmSchedule(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSMM}`);
  }

  addBsaSchedule(schedule: any): Observable<any> {
    return this.http.post<any>(`${this.APIBSA}`, schedule);
  }

  addBshmSchedule(schedule: any): Observable<any> {
    return this.http.post<any>(`${this.APIBSHM}`, schedule);
  }

  addBshrmSchedule(schedule: any): Observable<any> {
    return this.http.post<any>(`${this.APIBSHRM}`, schedule);
  }

  addBsmmSchedule(schedule: any): Observable<any> {
    return this.http.post<any>(`${this.APIBSMM}`, schedule);
  }

  updateBsaSchedule(id: number, schedule: any): Observable<any> {
    return this.http.put(`${this.APIBSA}/${id}`, schedule);
  }

  updateBshmSchedule(id: number, schedule: any): Observable<any> {
    return this.http.put(`${this.APIBSHM}/${id}`, schedule);
  }

  updateBshrmSchedule(id: number, schedule: any): Observable<any> {
    return this.http.put(`${this.APIBSHRM}/${id}`, schedule);
  }

  updateBsmmSchedule(id: number, schedule: any): Observable<any> {
    return this.http.put(`${this.APIBSMM}/${id}`, schedule);
  }

  deleteBsaSchedule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.APIBSMM}/${id}`);
  }

  deleteBshmSchedule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.APIBSHM}/${id}`);
  }

  deleteBshrmSchedule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.APIBSHRM}/${id}`);
  }

  deleteBsmmSchedule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.APIBSMM}/${id}`);
  }

  //* Bsa
  //^ FIRST YEAR

  getFirstBsaSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSA}/1st-year`);
  }

  //^ SECOND YEAR
  getSecondBsaSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSA}/2nd-year`);
  }

  //^ THIRD YEAR
  getThirdBsaSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSA}/3rd-year`);
  }

  //^ FOURTH YEAR

  getFourthBsaSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSA}/4th-year`);
  }

  //* Bshm
  //^ FIRST YEAR

  getFirstBshmSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSHM}/1st-year`);
  }

  //^ SECOND YEAR
  getSecondBshmSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSHM}/2nd-year`);
  }

  //^ THIRD YEAR
  getThirdBshmSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSHM}/3rd-year`);
  }

  //^ FOURTH YEAR

  getFourthBshmSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSHM}/4th-year`);
  }

  //* Bshrm
  //^ FIRST YEAR

  getFirstBshrmSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSHRM}/1st-year`);
  }

  //^ SECOND YEAR
  getSecondBshrmSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSHRM}/2nd-year`);
  }

  //^ THIRD YEAR
  getThirdBshrmSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSHRM}/3rd-year`);
  }

  //^ FOURTH YEAR

  getFourthBshrmSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSHRM}/4th-year`);
  }

  //* Bsmm
  //^ FIRST YEAR

  getFirstBsmmSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSMM}/1st-year`);
  }

  //^ SECOND YEAR
  getSecondBsmmSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSMM}/2nd-year`);
  }

  //^ THIRD YEAR
  getThirdBsmmSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSMM}/3rd-year`);
  }

  //^ FOURTH YEAR

  getFourthBsmmSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSMM}/4th-year`);
  }

  //* MINOR SUBJECTS

  //^ BSA
  findMinorSubjectsBsa(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSA}/minor-subjects`);
  }

  findMinorSubjectsBsaFirstYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSA}/minor-subjects/1st-year`);
  }

  findMinorSubjectsBsaSecondYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSA}/minor-subjects/2nd-year`);
  }

  findMinorSubjectsBsaThirdYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSA}/minor-subjects/3rd-year`);
  }

  findMinorSubjectsBsaFourthYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSA}/minor-subjects/4th-year`);
  }

  //^ BSHM

  findMinorSubjectsBshm(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSHM}/minor-subjects`);
  }

  findMinorSubjectsBshmFirstYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSHM}/minor-subjects/1st-year`);
  }

  findMinorSubjectsBshmSecondYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSHM}/minor-subjects/2nd-year`);
  }

  findMinorSubjectsBshmThirdYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSHM}/minor-subjects/3rd-year`);
  }

  findMinorSubjectsBshmFourthYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSHM}/minor-subjects/4th-year`);
  }

  //^ BSMM

  findMinorSubjectsBsmm(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSMM}/minor-subjects`);
  }

  findMinorSubjectsBsmmFirstYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSMM}/minor-subjects/1st-year`);
  }

  findMinorSubjectsBsmmSecondYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSMM}/minor-subjects/2nd-year`);
  }

  findMinorSubjectsBsmmThirdYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSMM}/minor-subjects/3rd-year`);
  }

  findMinorSubjectsBsmmFourthYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSMM}/minor-subjects/4th-year`);
  }

  //^ BSHRM

  findMinorSubjectsBshrm(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSHRM}/minor-subjects`);
  }

  findMinorSubjectsBshrmFirstYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSHRM}/minor-subjects/1st-year`);
  }

  findMinorSubjectsBshrmSecondYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSHRM}/minor-subjects/2nd-year`);
  }

  findMinorSubjectsBshrmThirdYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSHRM}/minor-subjects/3rd-year`);
  }

  findMinorSubjectsBshrmFourthYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBSHRM}/minor-subjects/4th-year`);
  }
}
