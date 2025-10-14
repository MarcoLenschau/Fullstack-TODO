import { Component, inject } from '@angular/core';
import { Api } from '../services/api/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [CommonModule, FormsModule],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  api = inject(Api)
  tasks: any = [];

  constructor() {
    this.api.getData().subscribe(tasks => this.tasks = tasks)
  }

  onSubmit(task: any) {
    task ? this.addTask(task) : "";
  }

  addTask(task: any) {
    this.api.postData({ 
      title: task 
    });
  }
}