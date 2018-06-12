import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <input type='button' value='-' (click)='decrementCounter()'/> 
  {{counterValue}}
  <input type='button' value='+' (click)='incrementCounter()'/> 

  `,
  styles: []
})
export class CounterComponent implements OnInit {

  counterValue: number;
  constructor() {
    this.counterValue = 0;
  }

  ngOnInit() {
  }

  decrementCounter (){
    this.counterValue--;
  }

  incrementCounter(){
    this.counterValue++;
  }
}
