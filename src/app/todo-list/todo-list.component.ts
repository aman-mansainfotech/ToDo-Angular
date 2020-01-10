import { Component, OnInit } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos : TodoComponent[];
  constructor(private todoService : TodosService) { }

  ngOnInit() {
    this.getTodos()
  }

  getTodos(){
    this.todos = this.todoService.getTodos();
  }

}
