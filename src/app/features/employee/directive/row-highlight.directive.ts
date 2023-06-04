import { Directive, ElementRef, HostBinding, HostListener, Input, EventEmitter, Output } from '@angular/core';
import { MatRow } from '@angular/material/table';

@Directive({
  selector: '[appRowHighlight]'
})
export class RowHighlightDirective {
  @Input() hoverBackgroundColor: string = '#eeb3c6';
  @Input() selectedRow: MatRow;
  @Output() rowSelected = new EventEmitter<any>();

  private hoveredRow: MatRow;
  private row: MatRow;

  @Input() set appRowHighlight(row: MatRow) {
    this.row = row;
  }

  @HostBinding('class.pointer') pointer = true;

  // Utiliser la class css 'rowhover'
  @HostBinding('class.rowhover') get isHovered() {
    return this.hoveredRow === this.row;
  }

  /** utiliser les style */
  // @HostBinding('style.backgroundColor') get backgroundColor() {
  //   return this.hoveredRow === this.row ? this.hoverBackgroundColor : null;
  // }

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

/**
 *  supposons que vous voulez que l'utilisateur de votre directive soit capable de spécifier le nom de la classe CSS
 *  à appliquer lorsque la souris survole une ligne. Vous pouvez faire ceci :
 */

/*
@Directive({
  selector: '[appRowHighlight]'
})
export class RowHighlightDirective {

  @Input() hoveredClass: string;

  // Reste du code...

  @HostBinding('class') get className() {
    return this.hoveredRow === this.row ? this.hoveredClass : null;
  }
}


<tr appRowHighlight="row" [hoveredClass]="'rowhover'">
  <!-- Contenu de la ligne de tableau -->
</tr>

*/
