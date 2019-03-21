import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { first, skip } from 'rxjs/operators';
// import { Chart } from 'frappe-charts';
declare var frappe: any;

@Component({
  selector: 'app-frappe-graph',
  templateUrl: './frappe-graph.component.html',
  styleUrls: ['./frappe-graph.component.less']
})
export class FrappeGraphComponent implements OnInit {

  // Input decorator specifies props injectable in the directive via html attributes
  @Input() type: string;
  @Input() height: number;
  @Input() colors: any;
  @Input() data$: Observable<any>;

  @ViewChild('frappe_chart') chartBox;

  chart;

  constructor() {
    // Initialise default values if not specified into directive attributes
    this.type = this.type || 'bar';
    this.height = this.height || 250;
    this.colors = this.colors || ['red'];
  }

  ngOnInit() {
    // Generate the frappe chart on init
    // Unwrap the observable to get the first streamed element, then all the others in a other observable
    const first$ = this.data$.pipe(first());
    const next$ = this.data$.pipe(skip(1));
    // On first element, we generate the graph
    first$.subscribe(data => {
      this.chart = new frappe.Chart(
        this.chartBox.nativeElement,
        {
          data,
          type: this.type,
          height: this.height,
          colors: this.colors,
          axisOptions: {
            xIsSeries: 1
          }
        });
    });
    // Next stream elements, update the graph representation with new datas
    next$.subscribe(data => {
      this.chart.update(data);
    });
  }

}
