import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService, Task } from './task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>TaskFlow</h1>
    <ul>
      <li *ngFor="let task of tasks">{{ task.title }}</li>
    </ul>
  `
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }
}