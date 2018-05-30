import { Component, OnInit, Input, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() taskList: {title: string, desc: string, status: string}[];
  @Output() moveToDone = new EventEmitter<number>();

  removeTask (index) {
    this.moveToDone.emit(index);
  }

  constructor() { }

  ngOnInit() {
  }

}
