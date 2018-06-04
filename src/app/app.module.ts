import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TaskEditorModule } from './task-editor-module/task-editor.module';

import { TasksService } from './tasks.service';

import { AppComponent } from './app.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HomeComponentComponent } from './home-component/home-component.component';


const routes = [
  {path: '', component: HomeComponentComponent},
  {path: ':type', component: HomeComponentComponent},
  {path: '**', component: HomeComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TaskHeaderComponent,
    TaskListComponent,
    HomeComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    TaskEditorModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TasksService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
