import { Directive, ElementRef, HostBinding, HostListener, Input, EventEmitter, Output } from '@angular/core';
import { MatRow } from '@angular/material/table';

@Directive({
  selector: '[appRowHighlight]'
})
export class RowHighlightDirective {
  @Input() hoveredRow: MatRow;
  @Input() selectedRow: MatRow;
  @Input() hoverBackgroundColor: string = '#eeb3c6';
  @Output() rowSelected = new EventEmitter<any>();

  private row: MatRow;

  @Input() set appRowHighlight(row: MatRow) {
    this.row = row;
  }

  @HostBinding('class.pointer') pointer = true;

  // @HostBinding('class.hovered') get isHovered() {
  //   return this.hoveredRow === this.row;
  // }

  @HostBinding('style.backgroundColor') get backgroundColor() {
    return this.hoveredRow === this.row ? this.hoverBackgroundColor : null;
  }

  @HostBinding('class.selected') get isSelected() {
    return this.selectedRow === this.row;
  }


  @HostListener('click') onClick() {
    this.rowSelected.emit(this.row);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hoveredRow = this.row;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hoveredRow = null;
  }

}
