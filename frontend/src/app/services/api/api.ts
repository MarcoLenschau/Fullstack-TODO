import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private apiUrl = "http://127.0.0.1:5000";
  private http = inject(HttpClient);

  /**
   * Retrieves the list of tasks from the API.
   *
   * @returns An Observable emitting the response data containing the tasks.
   */
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tasks`);
  }

  /**
   * Sends a POST request to create a new task with the provided payload.
   *
   * @param payload - The data to be sent in the request body for creating a new task.
   * @returns An Observable representing the HTTP response from the server.
   */
  postData(payload: any) {
    return this.http.post(`${this.apiUrl}/tasks`, payload);
  }

  /**
   * Sends a DELETE request to remove a task by its ID.
   *
   * @param id - The unique identifier of the task to be deleted.
   * @returns An Observable representing the HTTP DELETE request.
   */
  deleteData(id: any) {
    return this.http.delete(`${this.apiUrl}/tasks/${id}`);
  }

  /**
   * Updates an existing task with the specified ID using the provided payload.
   *
   * @param id - The unique identifier of the task to update.
   * @param payload - The data to update the task with.
   * @returns An Observable representing the HTTP PUT request to update the task.
   */
  updateData(id: any, payload: any) {
    return this.http.put(`${this.apiUrl}/tasks/${id}`, payload);
  }
}