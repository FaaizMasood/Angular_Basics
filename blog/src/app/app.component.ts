import { Component } from '@angular/core';
import { HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';

// interface Alert {
//   type: string;
//   message: string;
// }

// const ALERTS: Alert[] = [
//   {
//     type: 'success',
//     message: 'This is an success alert',
//   },
//   {
//     type: 'info',
//     message: 'This is an info alert',
//   },
//   {
//     type: 'warning',
//     message: 'This is a warning alert',
//   },
//   {
//     type: 'danger',
//     message: 'This is a danger alert',
//   },
//   {
//     type: 'primary',
//     message: 'This is a primary alert',
//   },
//   {
//     type: 'secondary',
//     message: 'This is a secondary alert',
//   },
//   {
//     type: 'light',
//     message: 'This is a light alert',
//   },
//   {
//     type: 'dark',
//     message: 'This is a dark alert',
//   },
// ];

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
  // -------------------Property Binding--------------------------------
  //
  // name = 'James Bond';
  // disabledBox = true;
  // enableBox() {
  //   this.disabledBox = false;
  // }
  // ----------------------Conditions-----------------------------
  //
  //show = true;
  //show = 'blue';\
  //color = 'red';
  // --------------------For loops in Angular-------------------------------
  //
  //
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
  // getUserValue(value) {
  //   console.warn(value);
  // }
  // color = 'orange';
  // err = false;
  // updateColor() {
  //   this.color = 'purple';
  // }
  //-----------------BootStrap in Angular-----------------------------
  // model = {
  //   left: true,
  //   middle: false,
  //   right: false,
  // };
  //-----------------Data from parent to child in Angular-----------------------------
  //data = 'this is the data string';
  // data = {
  //   first: 'James',
  //   last: 'Bond',
  // };

  //-----------------Make a component reusable in Angular-----------------------------
  // users = {
  //   first: 'James',
  //   last: 'Bond',
  // };
  // users = [
  //   {
  //     first: 'James',
  //     last: 'Bond',
  //   },
  //   {
  //     first: 'Faaiz',
  //     last: 'Masood',
  //   },
  //   {
  //     first: 'Bat',
  //     last: 'Man',
  //   },
  //   {
  //     first: 'James',
  //     last: 'Bond',
  //   },
  // ];

  //-----------------Testing myself-----------------------------
  name = 'faaiz';
  getName(val) {
    this.name = val;
    alert(val);
  }
  changeColor = false;
  changeCol() {
    this.changeColor = true;
  }
  show = true;
  enableField() {
    this.show = false;
  }
  obj = [
    {
      name: 'Christiano',
      age: 35,
    },
    {
      name: 'Messi',
      age: 33,
    },
  ];
}
