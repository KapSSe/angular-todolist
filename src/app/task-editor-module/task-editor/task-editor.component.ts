import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../tasks.service';
import { ValidationsService } from '../validations-service/validations.service';
import { ActivatedRoute, Params } from '@angular/router';
import { fade } from '../../animations/fade';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.scss'],
  animations: [
    fade
  ]
})
export class TaskEditorComponent implements OnInit {

  status = 'initial';
  scope = {pool: true};
  editable = true;
  error;

  constructor(private tasksService: TasksService, private route: ActivatedRoute, private validationsService: ValidationsService ) { }

  ngOnInit() {

 }


  checkTask(title, desc) {

    this.validationsService.validate({
      title: title.value,
      desc: desc.value,
    });

    this.error = this.validationsService.errors;

    return this.sendTask(title, desc);
  }

  sendTask(title, desc) {
     if (this.validationsService.resolved) {
          this.tasksService.getTask({
            title: title.value,
            desc: desc.value,
            status: this.status,
            scope: this.scope
      });
    }
  }

}
