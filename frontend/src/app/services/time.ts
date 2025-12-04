import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeService {

  private apiUrl = 'http://192.168.0.10:3000/api/time';

  constructor(private http: HttpClient) {}

  getServerTime(): Observable<{ now: string }> {
    return this.http.get<{ now: string }>(this.apiUrl);
  }
}
