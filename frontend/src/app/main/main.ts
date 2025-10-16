import { Component, inject } from '@angular/core';
import { Api } from '../services/api/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddTaskDialog } from "../dialogs/add-task-dialog/add-task-dialog";
import { MatDialog } from '@angular/material/dialog';
import { DetailTaskDialog } from '../dialogs/detail-task-dialog/detail-task-dialog';

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
  isDetailDialogOpen = false;
  errorMessage = '';
  dialog = inject(MatDialog);

  constructor() {
    this.api.getData().subscribe(tasks => this.tasks = tasks);
  }

  openDialog() {
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  openDetailDialog(task: any) {
    const dialogRef = this.dialog.open(DetailTaskDialog);
    dialogRef.componentInstance.task = task;
    this.isDetailDialogOpen = true;
  }

  closeDetailDialog() {
    this.isDetailDialogOpen = false;
  }

  removeTask(id: any, event: Event) {
    event.stopPropagation();
    this.api.deleteData(id).subscribe((response :any) => {
      if (response.status == 404) {
        setTimeout(() => { this.errorMessage = ''; }, 5000);
        this.errorMessage = "Error deleting task";
      }
    });
  }

  selectTask(task: any) {
  }
}