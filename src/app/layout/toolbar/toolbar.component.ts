import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { MatMenuTrigger, _MatMenuTriggerBase } from '@angular/material/menu';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  // input sidnav to top bar
  @Input('sidenav') sidenav: any;

  @ViewChild(MatMenuTrigger) menuTrigger?: MatMenuTrigger;

  showMenu() {
    if (this.menuTrigger) {
      this.menuTrigger.openMenu();
    }
  }

  hideMenu() {
      this.menuTrigger?.closeMenu();
  }
}
