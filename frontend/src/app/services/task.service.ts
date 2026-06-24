import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private http = inject(HttpClient);
  private api = `${ environment.apiUrl }/task`

  private obtenerHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('token');

    return new HttpHeaders({
      Authorization: `Bearer ${ token }`
    })
  }

  constructor() { }

  obtenerTareas(): Observable<Task[]> {
    return this.http.get<Task[]> (
      this.api,
      {
        headers: this.obtenerHeaders()
      }
    )
  }

  crearTarea(task: Partial<{ titulo: string | null; }>) : Observable<Task> {
    return this.http.post<Task>(
      this.api,
      task,
      {
        headers: this.obtenerHeaders()
      }
    )
  }

  actualizarTarea(
    id: string,
    task: Partial<{ completado: boolean}>
  ): Observable<Task> {
    return this.http.put<Task>(
      `${ this.api }/${ id }`,
      task,
      {
        headers: this.obtenerHeaders()
      }
    )
  }
}
