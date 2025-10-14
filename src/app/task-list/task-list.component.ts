import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService, Task } from '../task.service';

<<<<<<< HEAD
import { Observable } from 'rxjs';


=======
>>>>>>> 4e5349e21f3fbfb7c43dcaa6dc0bea4a972befbe
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
<<<<<<< HEAD

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

=======
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
>>>>>>> 4e5349e21f3fbfb7c43dcaa6dc0bea4a972befbe
