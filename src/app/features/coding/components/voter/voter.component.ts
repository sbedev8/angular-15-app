import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent {


  @Input() question?: string;
  @Input() yesAnswer?: string;
  @Input() noAnswer?: string;
  @Output() output= new EventEmitter<boolean>();

  vote(vote: boolean){
    this.output.emit(vote)
  }

}
