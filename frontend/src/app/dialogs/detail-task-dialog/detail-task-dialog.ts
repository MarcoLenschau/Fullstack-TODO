import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-task-dialog',
  imports: [CommonModule],
  templateUrl: './detail-task-dialog.html',
  styleUrl: './detail-task-dialog.scss'
})
export class DetailTaskDialog {
  @Input() task: any;
  public dialogRef = inject(MatDialogRef<DetailTaskDialog>);
}