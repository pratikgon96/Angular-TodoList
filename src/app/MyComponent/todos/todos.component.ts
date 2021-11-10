import { Component, OnInit } from '@angular/core';
import{Todo} from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  localItems: any;
  constructor() {
    this.localItems = localStorage.getItem('todos');
    if(this.localItems == null){
      this.todos = []
    }
    else{
      this.todos = JSON.parse(this.localItems);
    }
    
   }

  ngOnInit(): void {
  }
  DeleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  AddTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  CheckTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
