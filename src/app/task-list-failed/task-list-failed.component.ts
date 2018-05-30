import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list-failed',
  templateUrl: './task-list-failed.component.html',
  styleUrls: ['./task-list-failed.component.scss']
})
export class TaskListFailedComponent implements OnInit {
  @Input() taskList: {title: string, desc: string, status: string}[];

  constructor() { }

  ngOnInit() {
  }

}
