import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private quoteApiUrl = `${environment.apiUrl}/external/quote/today`; // Point to your NestJS backend

  constructor(private http: HttpClient) {}

  getDailyQuote(): Observable<any> {
    return this.http.get<any>(this.quoteApiUrl);
  }
}
