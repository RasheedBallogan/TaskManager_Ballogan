import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService, Task } from '../task.service';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  newTaskName: string = '';
  editingTaskId: number | null = null;
  editedName: string = '';

  tasks$!: Observable<Task[]>;

  constructor(public taskService: TaskService) {}

  ngOnInit() {
    this.tasks$ = this.taskService.filteredTasks$;
  }

  addTask() {
    const name = this.newTaskName.trim();
    if (name) {
      this.taskService.addTask(name);
      this.newTaskName = '';
    }
  }

  toggleTask(task: Task) {
    this.taskService.toggleTaskCompletion(task.id);
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task.id);
  }

  startEditing(task: Task) {
    this.editingTaskId = task.id;
    this.editedName = task.name;
  }

  finishEditing(task: Task) {
    const trimmed = this.editedName.trim();
    if (trimmed) {
      this.taskService.editTask(task.id, trimmed);
    }
    this.editingTaskId = null;
  }

  get totalCount(): number {
    return this.taskService['tasks'].length;
  }

  get completedCount(): number {
    return this.taskService['tasks'].filter(t => t.completed).length;
  }

  get remainingCount(): number {
    return this.taskService['tasks'].filter(t => !t.completed).length;
  }

}

