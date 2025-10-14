import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TaskService } from './task.service';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFilterComponent } from './task-filter/task-filter.component';

@Component({
  selector: 'app-root',
<<<<<<< HEAD
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TaskFormComponent,
    TaskListComponent,
    TaskFilterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
=======
  imports: [RouterOutlet, CommonModule, TaskFormComponent, TaskListComponent],
  template: `
  <h1>🗂️ Task Manager</h1>
  <app-task-form></app-task-form>
  <app-task-list></app-task-list>
  
`,
>>>>>>> 4e5349e21f3fbfb7c43dcaa6dc0bea4a972befbe
})
export class AppComponent {
  constructor(public taskService: TaskService) {}
}
