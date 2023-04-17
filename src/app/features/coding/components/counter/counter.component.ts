import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent  {
  @Input() message: string;
  @Input() interval: number;
  @Output() tick = new EventEmitter<string>();

  @ViewChild('intervalInput') intervalInput: ElementRef;
  @ViewChild('inputMessage') inputMessage: ElementRef;

  timerId: any;


  setInterval(){
    this.interval = this.intervalInput?.nativeElement.value;
    this.message = this.inputMessage?.nativeElement.value;

    clearInterval(this.timerId);

    this.timerId = setInterval(() => {
      this.tick.emit(this.message);
    }, this.interval);
  }

}
