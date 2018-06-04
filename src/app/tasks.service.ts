export class TasksService {

  taskPool = [];
  taskDone = [];
  taskFailed = [];


  getTask(task: {title: string, desc: string, status: string, scope: {}}) {
    this.pushTask(task);
  }

  loadTasks(key) {
    let res;
    switch (key) {
      case 'done':
        res = this.taskDone;
      break;
      case 'failed':
        res = this.taskFailed;
      break;
      default: res = this.taskPool;
    }
    return res;
  }

  pushTask(task) {
    this.taskPool.push(task);
  }

  moveToDone(i) {
    this.taskPool[i].status = 'done';
    this.taskPool[i].scope = {done: true};
    this.taskDone.push(this.taskPool[i]);
    this.clearPool(i);
  }

  moveToFailed(i) {
    this.taskPool[i].status = 'failed';
    this.taskPool[i].scope = {failed: true};
    this.taskFailed.push(this.taskPool[i]);
    this.clearPool(i);
  }

  clearPool(i) {
    this.taskPool.splice(i, 1);
  }

}
