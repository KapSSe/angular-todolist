import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { fade } from '../../animations/fade';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    fade
  ]
})
export class TaskItemComponent implements OnInit {

  @Input() taskList: {title: string, desc: string, status: string , scope: string}[];
  @Input() readonly: boolean;
  @Input() done: boolean;
  @Input() failed: boolean;
  @Output() removingTask = new EventEmitter<number>();

  changeToDone(i) {
    const doneTask = this.taskList[i];
    doneTask.status = 'done';
    doneTask.scope = 'move';
    this.removeFromScope(i);
  }

  changeToFailed(i) {
    const doneTask = this.taskList[i];
    doneTask.status = 'failed';
    doneTask.scope = 'move';
    this.removeFromScope(i);
  }

  removeFromScope(i) {
    this.removingTask.emit(i);
  }

  constructor() { }

  ngOnInit() {
  }

}
