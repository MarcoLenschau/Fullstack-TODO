import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private apiUrl = "http://127.0.0.1:5000";
  private http = inject(HttpClient);

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tasks`);
  }

  postData(payload: any) {
    this.http.post(`${this.apiUrl}/tasks/`, payload)
      .subscribe({
        next: (response) => console.log('Erfolgreich gesendet:', response),
        error: (err) => console.error('Fehler:', err)
      });
  }
}