import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-todo]',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() status : boolean ;
  @Input() name : string;
  @Input() description : string;

  constructor() { }

 

}
