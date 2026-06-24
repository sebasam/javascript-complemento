import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task';
import { FormBuilder, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  private taskService = inject(TaskService);
  private fb = inject(FormBuilder);
  tasks: Task[] = [];
  taskForm = this.fb.group({
    titulo:[
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ]
  })

  ngOnInit(): void {
    this.obtenerTareas();
  }

  obtenerTareas(): void {
    this.taskService.obtenerTareas()
                    .subscribe({
                        next: (respuesta) => {
                          console.log(respuesta);
                          this.tasks = respuesta;
                        },
                        error: (error) => {
                          console.error(error);
                        }
                      })
  }

  crearTarea(): void {
    if(this.taskForm.invalid) {
      this.taskForm.markAsTouched();

      return
    }

    this.taskService.crearTarea(this.taskForm.value)
    .subscribe({
      next: (respuesta) => {
        this.tasks.unshift(respuesta);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
  
  completarTarea(task: Task): void {
    this.taskService.actualizarTarea(
      task._id!,
      {
          completado: !task.completado
      }
    ).subscribe({
      next: () => {
        alert('Actualizaste la tarea')
        this.obtenerTareas();
      },
      error: (error) => {
        console.error(error)
      }
    })
  }
}
