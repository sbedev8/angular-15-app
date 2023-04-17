import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @ViewChild('leftSidenav', { static: true })  sidenav: any;

  onclick() {
    this.sidenav.nativeElement.toggle()
   }

}
