import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  readonly APICalendar = `${environment.apiUrl}/calendar`;
  // readonly APICalendar =
  //   'https://benedicto-scheduling-backend.onrender.com/calendar';

  constructor(private http: HttpClient) {}

  //^ CALENDAR

  // Fetch calendar events for a specific user
  // getCalendarByDean(username: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.APICalendar}/event/${username}`);
  // }

  getCalendar(): Observable<any[]> {
    return this.http.get<any[]>(`${this.APICalendar}/event/`);
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
