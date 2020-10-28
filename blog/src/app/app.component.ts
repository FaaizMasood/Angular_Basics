import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Youtube';
  //name = 'faaiz Masood';
  // function
  // getName() {
  //   return this.name;
  // }
  // object
  // obj = {
  //   name: 'Peter',
  //   age: 20,
  // };

  // // array
  // arr = ['bruce', 'peter', 'ronaldo'];

  // // variables
  // a = 19;
  // b = 21;

  // // Url
  // siteUrl = window.location.href;

  // // function for click functionality
  // getAlert(name) {
  //   alert(name);
  // }

  //
  // myEvent(evt) {
  //   console.warn(evt);
  // }

  // currentVal = '';
  // getVal(val) {
  //   console.warn(val);
  //   this.currentVal = val;
  // }
  // ---------------------------------------------------
  // Property Binding
  // name = 'James Bond';
  // disabledBox = true;
  // enableBox() {
  //   this.disabledBox = false;
  // }
  // ---------------------------------------------------
  // Conditions
  //show = true;
  //show = 'blue';\
  //color = 'red';
  // ---------------------------------------------------
  // For loops in Angular
  //data = ['faaiz', 'rehan', 'banoori'];
  // data = [
  //   {
  //     name: 'faaiz',
  //     age: 23,
  //     email: 'faaiz.gmail.com',
  //   },
  //   {
  //     name: 'rehan',
  //     age: 29,
  //     email: 'rehan.gmail.com',
  //   },
  //   {
  //     name: 'banoori',
  //     age: 20,
  //     email: 'banoori.gmail.com',
  //   },
  //   {
  //     name: 'omar',
  //     age: 27,
  //   },
  // ];
  getUserValue(value) {
    console.warn(value);
  }
}
