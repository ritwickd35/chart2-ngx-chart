import { Component, OnInit } from '@angular/core';
import { multi } from './data';
import { Color } from '@swimlane/ngx-charts';
import * as dat from './values.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'chart2';

  data: any[] = [];
  view: [number, number] = [700, 300];

  dat2 = dat;

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme : string | Color= '#FFFFFF';

  customColor = [
    {
      name: '2012',
      value: '#0d00ff',
    },
  ];

  constructor() {
    // Object.assign(this, { multi });
    this.data = multi;
    console.log(multi[0].series[0].value);
  }
  result: any[] = [];
  lineCustomColor() {
    for (let i = 0; i < multi[0].series.length; i++) {
      if (multi[0].series[i].value < 62000000) {
        this.result.push({ name: multi[0].series[i].name, value: '#7aa3e0' });
      }
      // else {
      //   this.result.push({ name: multi[0].series[i].name, value: '#33cc33' });
      // }
    }
    console.log(multi[0].series.length)
    return this.result;

    // multi.series[i].value
  }

  ngOnInit(

  ): void {
      console.log(dat)
  }
}
