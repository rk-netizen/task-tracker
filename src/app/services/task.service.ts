import { Injectable } from '@angular/core';
import { TaskResponse } from '../task.interface';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = 'http://localhost:3000/tasks';

  constructor(private httpClient: HttpClient) { }

  getTask(): Observable<TaskResponse[]>{
    // const mockTask = of(MockTask);
    // return mockTask;
    return this.httpClient.get<TaskResponse[]>(this.apiUrl)
  }

  deleteTask(task: TaskResponse){
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpClient.delete<TaskResponse>(url);
  }

  updateTaskReminder(task:TaskResponse){
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpClient.put<TaskResponse>(url,task,httpOptions); //

  }

  addTask(task: TaskResponse){
    return this.httpClient.post<TaskResponse>(this.apiUrl,task,httpOptions);
  }
}
