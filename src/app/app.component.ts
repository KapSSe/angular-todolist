import {Component} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoDataService],
})

export class AppComponent {

  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
    todo.state = 'inactive';
    console.log(todo.state);
  }

  editTodo(todo) {
    console.log(todo);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}

