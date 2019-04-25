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

    let movementPercentage = [12, 20, 18, 59, 31, 60, 76];
    let luminosityDates = ['23/12/2012, 03:00:00', '24/12/2012, 03:00:00', 
                           '25/12/2012, 03:00:00', '26/12/2012, 03:00:00',
                           '27/12/2012, 03:00:00', '28/12/2012, 03:00:00',
                           '29/12/2012, 03:00:00'];

    this.movementStackedChart = new Chart('movementStackedCanvas', {
        type: 'bar',
        data: {
            labels: luminosityDates,
            xAxisID: "temps",
            yAxisID: "luminosité",
            datasets: [
              {
                  data: movementPercentage,
                  label: "Mouvement par jour (%)",
                  backgroundColor: 'rgba(0, 200, 0, 0.7)',
                  borderColor: 'rgba(0, 200, 0, 1)',
                  borderWidth: 1
              }
            ]
        },
        options: {
            legend: {
                display: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    stacked: true
                }],
                yAxes: [{
                    display: true,
                    //stacked: true,
                    ticks: {
                        beginAtZero: true,
                        max: 100,
                    }
                }],
            }
        }
    });

  }

}
