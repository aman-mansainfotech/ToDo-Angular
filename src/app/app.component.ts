import { Component, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AddTodoComponent } from './add-todo/add-todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo';
  @Output() openModal:boolean = false;

  constructor(private modalService: NgbModal) {}

  openAddComponentModal(){
    const modalRef = this.modalService.open(AddTodoComponent);
    window.alert('Test');
  }
}
