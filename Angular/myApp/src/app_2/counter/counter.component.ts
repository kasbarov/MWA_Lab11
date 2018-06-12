import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


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
  @Input() counter: number = 0;
  @Output() counterChange: EventEmitter<number>;

  constructor() {
    this.counterChange = new EventEmitter();
  }

  ngOnInit() {
    this.counterValue = this.counter;
  }

  decrementCounter() {
    this.counterValue--;
    this.counter = this.counterValue;
    this.counterChange.emit(this.counter);
    return false;
  }

  incrementCounter() {
    this.counterValue++;
    this.counter = this.counterValue;
    this.counterChange.emit(this.counter);
    return false;
  }
}
