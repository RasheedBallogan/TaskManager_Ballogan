import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Task {
  id: number;
  name: string;
  completed: boolean;
  createdAt: Date;
}

export interface Task {
  name: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
<<<<<<< HEAD
  private taskIdCounter = 1;

  private currentFilter: 'all' | 'active' | 'completed' = 'all';
  private filteredTasksSubject = new BehaviorSubject<Task[]>([]);
  filteredTasks$ = this.filteredTasksSubject.asObservable();

  constructor() {}

  addTask(name: string): void {
    const newTask: Task = {
      id: this.taskIdCounter++,
      name,
      completed: false,
      createdAt: new Date()
    };
    this.tasks.push(newTask);
    this.applyFilter();
  }

  editTask(id: number, newName: string): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.name = newName;
      this.applyFilter();
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.applyFilter();
  }

  toggleTaskCompletion(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.applyFilter();
    }
  }

  setFilter(filter: 'all' | 'active' | 'completed'): void {
    this.currentFilter = filter;
    this.applyFilter();
  }

  private applyFilter(): void {
    let filtered = this.tasks;
    if (this.currentFilter === 'active') {
      filtered = this.tasks.filter(t => !t.completed);
    } else if (this.currentFilter === 'completed') {
      filtered = this.tasks.filter(t => t.completed);
    }
    this.filteredTasksSubject.next(filtered);
=======

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
>>>>>>> 4e5349e21f3fbfb7c43dcaa6dc0bea4a972befbe
  }
}
