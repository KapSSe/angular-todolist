import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { TodoDataService } from 'src/app/todo-data.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
