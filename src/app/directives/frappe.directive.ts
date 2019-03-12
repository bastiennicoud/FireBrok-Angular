import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Chart } from 'frappe-charts';

/**
 * Directive responsible to generate the frappe chart on targeted element
 */
@Directive({
  selector: '[appFrappe]'
})
export class FrappeDirective {

  // Input decorator specifies props injectable in the directive via html attributes
  @Input() title: string;
  @Input() type: string;
  @Input() data: any;

  // Result of the directive processing (to be output in the element)
  @Output() chart: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private el: ElementRef
  ) {
    // Initialise default values if not specified into directive attributes
  }

}
