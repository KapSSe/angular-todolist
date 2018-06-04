import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationsService } from './validations-service/validations.service';
import { TaskEditorComponent } from './task-editor/task-editor.component';

@NgModule({
  declarations: [
    TaskEditorComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    ValidationsService
  ],
  exports: [TaskEditorComponent]
})
export class TaskEditorModule { }
