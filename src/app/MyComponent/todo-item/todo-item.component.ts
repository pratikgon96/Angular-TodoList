import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo;

  @Input() i!: number;

  @Output() todoDel: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheck: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    
  }
  onClick(todo: Todo){
    this.todoDel.emit(todo);
    console.log("Delete has been triggered!");
  }

  onCheckboxClick(todo: Todo){
    this.todoCheck.emit(todo);
    console.log("Check is triggered!");
  }
}
