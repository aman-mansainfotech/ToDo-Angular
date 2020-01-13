import { Injectable } from '@angular/core';
import { Todos } from './todos';
import { TodoComponent } from './todo/todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  lastid : number = 0;
  todos : TodoComponent[] = [];
  
  constructor() { }
}
