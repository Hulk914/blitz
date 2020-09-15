import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goku-view',
  templateUrl: './goku-view.component.html',
  styleUrls: ['./goku-view.component.css']
})
export class GokuViewComponent implements OnInit {

  lineBreak = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: []
  };
  constructor() { }

  ngOnInit(): void {
  }

  addBreak(index) {
    this.lineBreak[index].push(0);
  }

  removeBreak(index) {
    this.lineBreak[index].pop();
  }

}
