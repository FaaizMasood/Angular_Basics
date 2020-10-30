import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlazylist',
  templateUrl: './adminlazylist.component.html',
  styleUrls: ['./adminlazylist.component.css'],
})
export class AdminlazylistComponent implements OnInit {
  constructor() {
    console.warn('user loaded');
  }

  ngOnInit(): void {}
}
