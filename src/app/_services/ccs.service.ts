import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CcsService {
  readonly APIUrl = `${environment.apiUrl}/schedule/bachelor-of-information-technology`;

  // readonly APIUrl =
  // 'https://benedicto-scheduling-backend.onrender.com/schedule/bachelor-of-information-technology';

  constructor(private http: HttpClient) {}

  findMinorSubjectsIT(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIUrl}/minor-subjects`);
  }

  findTechnoForCoe(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIUrl}/minor-subjects/techno`);
  }

  findMinorSubjectsITFirstYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIUrl}/minor-subjects/1st-year`);
  }

  findMinorSubjectsITSecondYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIUrl}/minor-subjects/2nd-year`);
  }

  findMinorSubjectsITThirdYear(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIUrl}/minor-subjects/3rd-year`);
  }

  //^ FIRST YEAR

  getFirstSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIUrl}/1st-year`);
  }

  //^ SECOND YEAR
  getSecondSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIUrl}/2nd-year`);
  }

  //^ THIRD YEAR
  getThirdSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIUrl}/3rd-year`);
  }

  //^ FOURTH YEAR

  getFourthSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIUrl}/4th-year`);
  }

  //^ ALL YEAR

  getAllSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIUrl}`);
  }

  addAllSchedule(schedule: any): Observable<any> {
    return this.http.post<any>(`${this.APIUrl}`, schedule);
  }

  updateAllSchedule(id: number, schedule: any): Observable<any> {
    return this.http.put(`${this.APIUrl}/${id}`, schedule);
  }

  deleteAllSchedule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.APIUrl}/${id}`);
  }
}
