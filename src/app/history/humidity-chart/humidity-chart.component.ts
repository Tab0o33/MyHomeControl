import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-humidity-chart',
  templateUrl: './humidity-chart.component.html',
  styleUrls: ['./humidity-chart.component.scss']
})
export class HumidityChartComponent implements OnInit {

  humidityChart = [];

  constructor() { }

  ngOnInit() {

    let temp = [35.5, 23.7, 11.2, 29.6];
    let alldates = [1485717216, 1485745061, 1485768552, 1485792552];

    let weatherDates = [];
    alldates.forEach((temp) => {
        let jsdate = new Date(temp * 1000)
        weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
    });

    this.humidityChart = new Chart('humidityCanvas', {
      type: 'line',
      data: {
        labels: weatherDates,
        datasets: [
          { 
            data: temp,
            borderColor: "#66ccaa",
            backgroundColor: 'rgba(102, 204, 170, 0.3)',
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
