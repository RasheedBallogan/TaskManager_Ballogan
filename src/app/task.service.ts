import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: { name: string; completed: boolean }[] = [];

  addTask(task: { name: string; completed: boolean }) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }
  getActiveTasks() {
    return this.tasks.filter(task => !task.completed);
  }
  
}