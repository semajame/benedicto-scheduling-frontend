import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

import { environment } from '@app/environments/environment';
import { Subjects } from '@app/_models/subjects';
import { Room } from '@app/_models/rooms';

// export interface Subject {
//   subject_code: string;
//   subject: string;
//   units: number;
//   pre_req?: string;
//   year: string;
// }

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  // private apiUrl = 'https://benedicto-scheduling-backend.onrender.com'; // Change to your backend URL
  private apiUrl = `${environment.apiUrl}/external`; // Change to your backend URL
  private apiRooms = `${environment.apiUrl}/external/datas/rooms`;

  constructor(private http: HttpClient) {}

  getSubjects(departmentCodeForClass: String): Observable<Subjects[]> {
    return this.http.get<Subjects[]>(
      `${this.apiUrl}/datas/subjects/${departmentCodeForClass}`
    );
  }

  searchSubjectsBySubjectCode(
    subjectCode: string
  ): Observable<Subjects | null> {
    return this.http
      .get<Subjects[]>(
        `${this.apiUrl}/datas/subjects/search?courseCode=${encodeURIComponent(
          subjectCode
        )}`
      )
      .pipe(
        map((response) => {
          const subjects = Array.isArray(response) ? response : [response]; // Ensure subje cts is always an array
          const subject = subjects.find(
            (subj) => subj.courseCode === subjectCode
          );
          return subject || null;
        })
      );
  }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiRooms}`);
  }

  getRoomById(roomName: string): Observable<Room> {
    return this.http.get<Room>(`${this.apiRooms}/${roomName}`);
  }

  getRoomSchedule(room: string): Observable<Room> {
    return this.http.get<Room>(`${this.apiRooms}/schedule/${room}`);
  }
}
