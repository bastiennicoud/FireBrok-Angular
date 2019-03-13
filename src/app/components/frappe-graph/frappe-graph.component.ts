import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'frappe-charts';
import { createViewChild } from '@angular/compiler/src/core';

@Component({
  selector: 'app-frappe-graph',
  templateUrl: './frappe-graph.component.html',
  styleUrls: ['./frappe-graph.component.less']
})
export class FrappeGraphComponent implements OnInit {

  // Input decorator specifies props injectable in the directive via html attributes
  @Input() type: string;
  @Input() height: number;
  @Input() data: any;

  @ViewChild('frappe_chart') chartBox;

  chart: Chart;

  constructor() {
    // Initialise default values if not specified into directive attributes
    this.type = this.type || 'bar';
    this.height = this.height || 250;
  }

  ngOnInit() {
    // Generate the frappe chart on init
    this.chart = new Chart(
      this.chartBox.nativeElement,
      {
        data: this.data,
        type: this.type,
        height: this.height
      });
  }

}
