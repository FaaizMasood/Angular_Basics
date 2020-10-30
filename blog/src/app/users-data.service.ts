import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// interface dataType {
//   name: string;
//   id: number;
//   indian: boolean;
//   address: any;
// }
@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  constructor(private http: HttpClient) {}
  // getData() {
  //   return {
  //     name: 'Faaiz',
  //     age: 30,
  //     email: 'hi@mail.com',
  //   };
  // }
  // gets the daya from URL and uses the http .get to get the data
  // getData() {
  //   let url = 'http://jsonplaceholder.typicode.com/todos';
  //   return this.http.get(url);
  // }
  // getData() {
  //   const data: dataType = {
  //     name: 'Faaiz',
  //     id: 100,
  //     indian: true,
  //     address: '73 downing street',
  //   };
  //   return data;
  // }
}
