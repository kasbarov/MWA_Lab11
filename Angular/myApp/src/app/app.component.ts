import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<app-counter counter="10" (counterChange) = 'logCounter($event)'></app-counter>
   <br/>
   Component Counter Valur = {{componentCounterValue}}`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  componentCounterValue: number;
  
  constructor() {
    this.componentCounterValue = 0;
  }
  logCounter(e) {
    this.componentCounterValue = e;
    // console.log (`counter value: ${e}`)
  }
}
