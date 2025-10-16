import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-task-dialog',
  imports: [],
  templateUrl: './detail-task-dialog.html',
  styleUrl: './detail-task-dialog.scss'
})
export class DetailTaskDialog {
  @Input() task: any;
  ngOnInit() {
    console.log(this.task);
  }
}