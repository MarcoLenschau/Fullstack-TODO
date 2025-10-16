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
    return this.http.post(`${this.apiUrl}/tasks`, payload);
  }

  deleteData(id: any) {
    return this.http.delete(`${this.apiUrl}/tasks/${id}`);
  }
}