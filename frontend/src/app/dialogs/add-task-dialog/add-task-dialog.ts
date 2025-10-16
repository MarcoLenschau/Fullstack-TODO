import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-task-dialog',
  imports: [],
  templateUrl: './add-task-dialog.html',
  styleUrl: './add-task-dialog.scss'
})
export class AddTaskDialog {
  @Input() api: any;
  
  onSubmit(task: any) {
    task ? this.addTask(task) : "";
  }

  addTask(task: any) {
    this.api.postData({ 
      title: task 
    });
  }
}
