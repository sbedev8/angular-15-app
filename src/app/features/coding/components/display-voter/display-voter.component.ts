import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-voter',
  templateUrl: './display-voter.component.html',
  styleUrls: ['./display-voter.component.scss']
})
export class DisplayVoterComponent {

  question = "too easy"
  yesAnswer = "yes"
  noAnswer = "NO"

  @ViewChild('lastVote') lastVote?: ElementRef;

  onVote(output: boolean) {
    const lastVoteElement = this.lastVote?.nativeElement;

    lastVoteElement.textContent = output ? this.yesAnswer : this.noAnswer ;

  }

}
