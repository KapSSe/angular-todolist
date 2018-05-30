import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list-done',
  templateUrl: './task-list-done.component.html',
  styleUrls: ['./task-list-done.component.scss']
})
export class TaskListDoneComponent implements OnInit {
  @Input() taskList: {title: string, desc: string, status: string}[];

  constructor() { }

  ngOnInit() {
  }

}
