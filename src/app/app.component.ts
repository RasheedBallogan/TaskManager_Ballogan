import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, TaskFormComponent, TaskListComponent],
  template: `
  <h1>🗂️ Task Manager</h1>
  <app-task-form></app-task-form>
  <app-task-list></app-task-list>
  
`,
})
export class AppComponent {
constructor(public taskService: TaskService) {}
}