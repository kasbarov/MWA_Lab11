import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
   // templateUrl: './app.component.html',
   template : `<app-counter counter="10" (counterChange) = 'logCounter($event)'></app-counter>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  logCounter(e){
    console.log (`counter value: ${e}`)
  }
}
