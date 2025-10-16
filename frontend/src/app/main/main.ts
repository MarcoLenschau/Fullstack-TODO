import { Component, inject } from '@angular/core';
import { Api } from '../services/api/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddTaskDialog } from "../dialogs/add-task-dialog/add-task-dialog";

@Component({
  selector: 'app-main',
  imports: [CommonModule, FormsModule, AddTaskDialog],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  api = inject(Api)
  tasks: any = [];
  isDialogOpen = false;

  constructor() {
    this.api.getData().subscribe(tasks => this.tasks = tasks);
  }

  openDialog() {
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  removeTask(id: any) {
    this.api.deleteData(id).subscribe({
      next: () => console.log('Task deleted'),
      error: (err) => console.error(err)
    });
  }
}