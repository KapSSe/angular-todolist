import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router/';
import { TasksService } from '../tasks.service';
import { fade } from '../animations/fade';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  animations: [
    fade
  ]
})
export class TaskListComponent implements OnInit {

  constructor(private tasksService: TasksService, private route: ActivatedRoute) { }

  tasks: {title: string, desc: string, status: string, scope: string}[] = [];
  board = 'todo';

  moveToDone(i) {
    this.tasksService.moveToDone(i);
  }

  moveToFailed(i) {
    this.tasksService.moveToFailed(i);
  }


  ngOnInit() {
    const param = this.route.snapshot.params['type'];
    this.tasks = this.tasksService.loadTasks(param);
    this.route.params.subscribe(
      (params: Params) => {
        this.tasks = this.tasksService.loadTasks(params.type);
      }
    );
   }
}
