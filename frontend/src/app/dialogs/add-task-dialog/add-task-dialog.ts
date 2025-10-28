import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-task-dialog',
  imports: [],
  templateUrl: './add-task-dialog.html',
  styleUrl: './add-task-dialog.scss'
})
export class AddTaskDialog {
  @Input() api: any;
  @Input() modus: "add" | "edit" = "add"; 
  @Input() currentTask: any = null;
  
  addTask(taskTitle: any, taskDescription: any = "") {
    const payload = {title: taskTitle, description: taskDescription};
    this.api.postData(payload).subscribe({
      error: (err: any) => console.error('Error adding task:', err)
    });
  }

  editTask(taskTitle: any, taskDescription: any = "") {
    const payload = {title: taskTitle, description: taskDescription};
    this.api.updateData(this.currentTask.id, payload).subscribe({
      error: (err: any) => console.error('Error editing task:', err)
    });
  }
}
