import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-task-dialog',
  imports: [],
  templateUrl: './add-task-dialog.html',
  styleUrl: './add-task-dialog.scss'
})
export class AddTaskDialog {
  @Input() api: any;
    
  addTask(task: any) {
    this.api.postData({title: task }).subscribe({
      error: (err: any) => console.error('Error adding task:', err)
    });
  }
}
