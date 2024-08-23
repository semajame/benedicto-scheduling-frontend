import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly APIUrl = 'http://localhost:4000/schedule';

  constructor(private http: HttpClient) {}

  //^ FIRST YEAR
  addSchedule(schedule: any): Observable<any> {
    return this.http.post<any>(`${this.APIUrl}/1st-year`, schedule);
  }

  getSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIUrl}/1st-year`);
  }

  updateSchedule(id: number, schedule: any): Observable<any> {
    return this.http.put(`${this.APIUrl}/1st-year/${id}`, schedule);
  }

  deleteSchedule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.APIUrl}/1st-year/${id}`);
  }

  //^ SECOND YEAR
  getSecondSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIUrl}/2nd-year`);
  }

  addSecondSchedule(schedule: any): Observable<any> {
    return this.http.post<any>(`${this.APIUrl}/2nd-year`, schedule);
  }

  //^ THIRD YEAR
  getThirdSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIUrl}/3rd-year`);
  }

  addThirdSchedule(schedule: any): Observable<any> {
    return this.http.post<any>(`${this.APIUrl}/3rd-year`, schedule);
  }

  // deleteSchedule(id: number): Observable<any> {
  //   return this.http.delete(`${this.APIUrl}/${id}`);
  // }
}
