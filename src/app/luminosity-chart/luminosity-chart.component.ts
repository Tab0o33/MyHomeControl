import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-luminosity-chart',
  templateUrl: './luminosity-chart.component.html',
  styleUrls: ['./luminosity-chart.component.scss']
}) 
export class LuminosityChartComponent implements OnInit {

  luminositySteppedChart = [];
  luminosityStackedChart = [];
  luminosityPieChart = []; 

  steppedActive: boolean = true;
  stackedActive: boolean = false;
  pieActive: boolean = false;

  constructor() { }

  ngOnInit() {

    //let luminosityMeasures = [0, 1, 2, 3, 1, 3, 0, 2];
    let luminosityMeasures = ["Nuit", "Sombre", "Eclairé", "Jour",
                                "Sombre", "Jour", "Nuit", "Eclairé"];

    let jour = [11, 20, 0, 55, 11, 20, 0, 55];
    let eclaire = [33, 34, 10, 12, 33, 34, 10, 12];
    let sombre = [40, 37, 14, 21, 40, 37, 14, 21];
    let nuit = [16, 9, 76, 12, 16, 9, 76, 12];

    /*let alldates = [1485717216, 1485745061, 1485768552, 1485792552];

    let luminosityDates = [];
    alldates.forEach((temp) => {
        let jsdate = new Date(temp * 1000)
        luminosityDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
    });*/

    let luminosityDates = ['23/12/2012, 03:00:00', '24/12/2012, 03:00:00', 
                           '25/12/2012, 03:00:00', '26/12/2012, 03:00:00',
                           '27/12/2012, 03:00:00', '28/12/2012, 03:00:00',
                           '29/12/2012, 03:00:00', '30/12/2012, 03:00:00'];

    this.luminositySteppedChart = new Chart('luminositySteppedCanvas', {
      type: 'line',
      data: {
          yLabels: ["Jour", "Eclairé", "Sombre", "Nuit"],
          labels: luminosityDates,
          xAxisID: "temps",
          yAxisID: "luminosité",
          
          datasets: [
              {
                  data: luminosityMeasures,
                  backgroundColor: 'rgba(255, 255, 0, 0.7)',
                  borderColor: 'rgba(205, 205, 200, 1)',
                  borderWidth: 1,
                  steppedLine:'middle',
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
                  type: 'category',
                  display: true,
                  ticks: {
                    beginAtZero: true,
                    max:4,
                }
              }],
          }
      }
    });

    this.luminosityStackedChart = new Chart('luminosityStackedCanvas', {
      type: 'bar',
      data: {
          labels: luminosityDates,
          xAxisID: "temps",
          yAxisID: "luminosité",
          datasets: [
            {
                data: nuit,
                label: "Nuit",
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1
            },
            {
              data: sombre,
              label: "Sombre",
              backgroundColor: 'rgba(143, 142, 0, 0.7)',
              borderColor: 'rgba(143, 142, 0, 1)',
              borderWidth: 1
            },
            {
              data: eclaire,
              label: "Eclaire",
              backgroundColor: 'rgba(218, 217, 0, 0.7)',
              borderColor: 'rgba(218, 217, 0, 1)',
              borderWidth: 1
            },
              {
                data: jour,
                label: "Jour",
                backgroundColor: 'rgba(255, 255, 0, 0.7)',
                borderColor: 'rgba(255, 255, 0, 1)',
                borderWidth: 1
            },
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
                  stacked: true
              }],
          }
      }
    });

    this.luminosityPieChart = new Chart('luminosityPieCanvas', {
      type: 'pie',
      data: {
          labels: [
              'Jour',
              'éclairé',
              'sombre',
              'nuit'
          ], 
          //xAxisID: "temps",
          //yAxisID: "luminosité",  
          datasets: [
            {
                data: [10,35,15,30],
                label: "Nuit",
                backgroundColor: [
                  'rgba(255, 255, 0, 0.6)',
                  'rgba(218, 217, 0, 0.6)',
                  'rgba(143, 142, 0, 0.6)',
                  'rgba(0, 0, 0, 0.6)'
              ],
                borderColor: 'rgba(0, 0, 0, 0.3)',
                borderWidth: 1
            }
          ]
      },
      options: {
          legend: {
              display: true
          },
          scales: {
              /*xAxes: [{
                  display: true,
                  stacked: true
              }],
              yAxes: [{
                  display: true,
                  stacked: true
              }],*/
          }
      }
    });

  }

  switchStepped(){
    this.steppedActive = !this.steppedActive;
  }
  switchStacked(){
    this.stackedActive = !this.stackedActive;
  }
  switchPie(){
    this.pieActive = !this.pieActive;
  }

}