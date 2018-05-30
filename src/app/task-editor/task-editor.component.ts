import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.scss']
})
export class TaskEditorComponent implements OnInit {

  title = '';
  desc = '';
  status = 'initial';
  scope = 'todo';

  @Output() taskCreated = new EventEmitter<{title: string, desc: string, status: string, scope: string}>();

  getTaskData() {
    this.taskCreated.emit({
      title: this.title,
      desc: this.desc,
      status: this.status,
      scope: this.scope
    });
  }

  getTitle($event) {
    this.title = $event.target.value;
  }

  getDesc($event) {
    this.desc = $event.target.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
