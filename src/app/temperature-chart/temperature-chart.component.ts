import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.scss']
})
export class TemperatureChartComponent implements OnInit {

  temperatureChart = [];

  constructor() { }

  ngOnInit() {

    let temp = [21.5, 23.7, 20.2, 35.6];
    let alldates = [1485717216, 1485745061, 1485768552, 1485792552];

    let weatherDates = [];
    alldates.forEach((temp) => {
        let jsdate = new Date(temp * 1000)
        weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
    });

    this.temperatureChart = new Chart('temperatureCanvas', {
      type: 'line',
      data: {
        labels: weatherDates,
        datasets: [
          { 
            data: temp,
            borderColor: "#ff0000",
            backgroundColor: 'rgba(255, 0, 0, 0.3)',
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
