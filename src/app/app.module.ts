import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { TaskEditorComponent } from './task-editor/task-editor.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListDoneComponent } from './task-list-done/task-list-done.component';
import { TaskListFailedComponent } from './task-list-failed/task-list-failed.component';
import { TaskItemComponent } from './task-list/task-item/task-item.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes = [
  {path: 'home', component: HomeComponentComponent},
  {path: 'done', component: TaskListDoneComponent},
  {path: 'failed', component: TaskListFailedComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    TaskEditorComponent,
    TaskListComponent,
    TaskListDoneComponent,
    TaskListFailedComponent,
    TaskItemComponent,
    HomeComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
