import { interval } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.scss'],
})
export class DisplayCounterComponent {
  message: string;
  interval: number;
  counter: number = 0;

  counterTick(message: string) {
    this.message = message;
    this.counter++;
  }
}
