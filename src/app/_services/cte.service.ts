import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CteService {
  readonly APIUrl = `${environment.apiUrl}/schedule/bachelor-of-secondary-education`;
  readonly APIBEED = `${environment.apiUrl}/schedule/bachelor-of-elementary-education`;

  constructor(private http: HttpClient) {}

  //^ ALL YEAR

  getAllSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIUrl}`);
  }

  getAllBeedSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBEED}`);
  }

  addAllSchedule(schedule: any): Observable<any> {
    return this.http.post<any>(`${this.APIUrl}`, schedule);
  }

  addAllBeedSchedule(schedule: any): Observable<any> {
    return this.http.post<any>(`${this.APIBEED}`, schedule);
  }

  updateAllSchedule(id: number, schedule: any): Observable<any> {
    return this.http.put(`${this.APIUrl}/${id}`, schedule);
  }

  updateAllBeedSchedule(id: number, schedule: any): Observable<any> {
    return this.http.put(`${this.APIBEED}/${id}`, schedule);
  }

  deleteAllSchedule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.APIUrl}/${id}`);
  }

  deleteAllBeedSchedule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.APIBEED}/${id}`);
  }

  //^ BSED
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

  //^ BEED
  //^ FIRST YEAR

  getBeedFirstSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBEED}/1st-year`);
  }

  //^ SECOND YEAR
  getBeedSecondSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBEED}/2nd-year`);
  }

  //^ THIRD YEAR
  getBeedThirdSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBEED}/3rd-year`);
  }

  //^ FOURTH YEAR

  getBeedFourthSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIBEED}/4th-year`);
  }
}
