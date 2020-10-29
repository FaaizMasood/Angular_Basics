import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  @Input() hero;
  //@Output() parentComponent: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    //console.log(this.hero);
    //this.parentComponent.emit({ name: 'Faaiz', age: 30 });.............................
  }

  // sendData() {
  //   let item = { name: 'Faaiz', age: 30 };
  //   this.parentComponent.emit(item);
  // }
}
