import { Injectable } from '@angular/core';
import { Todos } from './todos';
import { TodoComponent } from './todo/todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  getTodos():TodoComponent[]{
    return Todos;
  }
}
