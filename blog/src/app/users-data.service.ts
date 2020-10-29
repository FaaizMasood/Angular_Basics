import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  constructor() {}
  getData() {
    return {
      name: 'Faaiz',
      age: 30,
      email: 'hi@mail.com',
    };
  }
}
