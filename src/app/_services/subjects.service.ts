import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  private apiUrl = `${environment.apiUrl}/external/datas/subjects`; // Change to your backend URL
  private apiRooms = `${environment.apiUrl}/external/datas/rooms`;

  constructor(private http: HttpClient) {}

  getSubjects(departmentCodeForClass: String): Observable<Subjects[]> {
    return this.http.get<Subjects[]>(
      `${this.apiUrl}/${departmentCodeForClass}`
    );
  }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiRooms}`);
  }
}
