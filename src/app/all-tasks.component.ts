import { Component, OnInit } from '@angular/core';
import { MaterialModule } from './material.module';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'all-tasks',
  templateUrl: './all-tasks.component.html',
  providers: [TaskService],
})
export class AllTasksComponent implements OnInit {
  constructor(private taskService: TaskService) { }
  tasks: Task[];
  getTasks(): void {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  };
  ngOnInit(): void {
    this.getTasks();
  }
}
