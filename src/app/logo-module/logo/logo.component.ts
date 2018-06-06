import { Component, OnInit, OnChanges } from '@angular/core';
import { TasksService } from '../../tasks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  tasksLength = 0;
  subscription: Subscription;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.subscription = this.tasksService.taskItem
       .subscribe(tasksLength => this.tasksLength = tasksLength);
  }

}
