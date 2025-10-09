import { Injectable } from '@angular/core';

export interface Task {
  name: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  addTask(task: Task) {
    this.tasks.push(task);
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getActiveTasks(): Task[] {
    return this.tasks.filter(task => !task.completed);
  }

  getCompletedCount(): number {
    return this.tasks.filter(t => t.completed).length;
  }

  deleteTask(taskToDelete: Task): void {
    this.tasks = this.tasks.filter(task => task !== taskToDelete);
  }

  toggleTaskCompletion(task: Task): void {
    task.completed = !task.completed;
  }
}
