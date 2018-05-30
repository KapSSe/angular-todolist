import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  taskPool = [];
  taskDone = [];
  taskFailed = [];


  taskAdded(task) {
    return this.pushTask(task);
  }

  pushTask(task) {
    this.taskPool.push(task);
  }

  filterStatus(i) {
    const taskStatus = this.taskPool[i].status;
    taskStatus === 'done' ? this.moveToDone(i) :
    taskStatus === 'failed' ? this.moveToFailed(i) :
    console.error('there is no task to filter');
  }

   moveToDone(i) {
    this.taskPool[i].scope = 'done';
    this.taskDone.push(this.taskPool[i]);
    this.clearFromPool(i);
   }

   moveToFailed(i) {
    this.taskPool[i].scope = 'failed';
    this.taskFailed.push(this.taskPool[i]);
    this.clearFromPool(i);
   }

   clearFromPool(i) {
    this.taskPool.splice(i, 1);
   }
}

