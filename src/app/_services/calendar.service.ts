import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  readonly APICalendar = 'http://localhost:4000/calendar';

  constructor(private http: HttpClient) {}

  //^ CALENDAR

  getCalendar(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APICalendar}/event`);
  }

  addCalendar(calendar: any): Observable<any> {
    return this.http.post<any>(`${this.APICalendar}/event`, calendar);
  }

  updateCalendar(id: number, calendar: any): Observable<any> {
    return this.http.put(`${this.APICalendar}/event/${id}`, calendar);
  }

  deleteCalendar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.APICalendar}/event/${id}`);
  }
}
