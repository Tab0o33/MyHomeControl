import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pressure-chart',
  templateUrl: './pressure-chart.component.html',
  styleUrls: ['./pressure-chart.component.scss']
})
export class PressureChartComponent implements OnInit {

  pressureChart = [];

  constructor() { }

  ngOnInit() {

    let temp = [21.7, 13.7, 20.2, 35.6];
    let alldates = [1485717216, 1485745061, 1485768552, 1485792552];

    let weatherDates = [];
    alldates.forEach((temp) => {
        let jsdate = new Date(temp * 1000)
        weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
    });

    this.pressureChart = new Chart('pressureCanvas', {
      type: 'line',
      data: {
        labels: weatherDates,
        datasets: [
          { 
            data: temp,
            borderColor: "#0000ff",
            backgroundColor: 'rgba(0, 0, 255, 0.3)',
            //fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

  }

}
