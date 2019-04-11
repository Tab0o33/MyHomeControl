import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeasureService } from '../services/measure.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-measure-history',
  templateUrl: './measure-history.component.html',
  styleUrls: ['./measure-history.component.scss']
})

export class MeasureHistoryComponent implements OnInit {
  
  name: string;
  tabActivated: string = 'luminosity';

  //chart = []; // This will hold our chart info

  constructor(private measureService: MeasureService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    /*this.name = this.route.snapshot.params['id'];
    console.log(this.name);

    /*this.weather.dailyForecast()
      .subscribe(res => {*/
        /*console.log(res);
        let temp = [21.5, 23.7, 20.2, 25.6];//res['list'].map(res => res.main.temp);
        console.log(temp);
        //let temp_min = res['list'].map(res => res.main.pressure);
        let alldates = [1485717216, 1485745061, 1485768552, 1485792552]//res['list'].map(res => res.dt)
        console.log(alldates);

        let weatherDates = []
        alldates.forEach((res) => {
            let jsdate = new Date(res * 1000)
            weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        })
        console.log("weatherDates",weatherDates);*/

        /*let temp = [21.5, 23.7, 20.2, 15.1];
        let alldates = [1485717216, 1485745061, 1485768552, 1485792552];

        let weatherDates = [];
        alldates.forEach((temp) => {
            let jsdate = new Date(temp * 1000)
            weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        })

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              { 
                data: temp,
                borderColor: "#3cba9f",
                fill: false
              }/*,
              { 
                data: temp_min,
                borderColor: "#ffcc00",
                fill: false
              },
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

      })*/
  }

  openTab(tab: string){
    this.tabActivated = tab;
    console.log(this.tabActivated);
  }

}
