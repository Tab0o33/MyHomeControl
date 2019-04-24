import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-movement-chart',
  templateUrl: './movement-chart.component.html',
  styleUrls: ['./movement-chart.component.scss']
})
export class MovementChartComponent implements OnInit {

  movementStackedChart = [];

  constructor() { }

  ngOnInit() {

    let temp = [12.5, 21.7, 17.2, 25.6];
    let alldates = [1485717216, 1485745061, 1485768552, 1485792552];

    let weatherDates = [];
    alldates.forEach((temp) => {
        let jsdate = new Date(temp * 1000)
        weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
    });

    this.movementStackedChart = new Chart('movementStackedCanvas', {
      type: 'line',
      data: {
        labels: weatherDates,
        datasets: [
          { 
            data: temp,
            borderColor: "#00ff00",
            fill: false
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
