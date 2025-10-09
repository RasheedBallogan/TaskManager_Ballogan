import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  newTaskName: string = '';
  constructor(public taskService: TaskService) {}

  toggleTask(task: Task) {
    this.taskService.toggleTaskCompletion(task);
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task);
  }

  get tasks(): Task[] {
    return this.taskService.getTasks();
  }

  get completedCount(): number {
    return this.taskService.getCompletedCount();
  }

  get totalCount(): number {
    return this.tasks.length;
  }
  get remainingTasks(): Task[] {
    return this.taskService.getActiveTasks();
  }
  
  get remainingCount(): number {
    return this.remainingTasks.length;
  }
  
}
