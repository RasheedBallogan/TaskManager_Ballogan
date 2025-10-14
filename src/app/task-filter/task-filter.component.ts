import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})


export class TaskFilterComponent {
  currentFilter: 'all' | 'active' | 'completed' = 'all';

  constructor(private taskService: TaskService) {}

  setFilter(filter: 'all' | 'active' | 'completed') {
    this.currentFilter = filter;
    this.taskService.setFilter(filter);
  }
}

