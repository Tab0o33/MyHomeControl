import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-movement-chart',
    templateUrl: './movement-chart.component.html',
    styleUrls: ['./movement-chart.component.scss']
})
export class MovementChartComponent implements OnInit {

    movementStackedWeekChart = [];
    movementPolarAreaChart = [];
    movementStackedHoursChart = [];

    steppedActive: boolean = true;
    stackedActive: boolean = false;
    pieActive: boolean = false;

    constructor() { }

    ngOnInit() {

        let movementWeekPercentage = [12, 20, 18, 59, 31, 60, 76];
        let movementPolarArea = [50, 80, 10, 20];
        let movementHoursPercentage = [
            12, 20, 18, 59, 31, 60, 76,
            12, 20, 18, 59, 31, 60, 76,
            12, 20, 18, 59, 31, 60, 76
        ];

        let movementWeekDates = [
            '23/12/2012, 03:00:00',
            '24/12/2012, 03:00:00',
            '25/12/2012, 03:00:00',
            '26/12/2012, 03:00:00',
            '27/12/2012, 03:00:00',
            '28/12/2012, 03:00:00',
            '29/12/2012, 03:00:00'
        ];

        let movementHoursDates = [
            '23/12/2012, 03:00:00',
            '24/12/2012, 03:00:00',
            '25/12/2012, 03:00:00',
            '26/12/2012, 03:00:00',
            '27/12/2012, 03:00:00',
            '28/12/2012, 03:00:00',
            '29/12/2012, 03:00:00',
            '23/12/2012, 03:00:00',
            '24/12/2012, 03:00:00',
            '25/12/2012, 03:00:00',
            '26/12/2012, 03:00:00',
            '27/12/2012, 03:00:00',
            '28/12/2012, 03:00:00',
            '29/12/2012, 03:00:00',
            '23/12/2012, 03:00:00',
            '24/12/2012, 03:00:00',
            '25/12/2012, 03:00:00',
            '26/12/2012, 03:00:00',
            '27/12/2012, 03:00:00',
            '28/12/2012, 03:00:00',
            '29/12/2012, 03:00:00'
        ];

        this.movementStackedWeekChart = new Chart('movementStackedWeekCanvas', {
            type: 'bar',
            data: {
                labels: movementWeekDates,
                xAxisID: "temps",
                yAxisID: "mouvement",
                datasets: [
                    {
                        data: movementWeekPercentage,
                        label: "Mouvement de la semaine par jour (%)",
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

        this.movementPolarAreaChart = new Chart('movementPolarAreaCanvas', {
            type: 'polarArea',
            data: {
                labels: ['0h-6h', '6h-12h', '12h-18h', '18h-0h'],
                xAxisID: "temps",
                yAxisID: "mouvement",
                datasets: [
                    {
                        data: movementPolarArea,
                        label: "Mouvement par jour (%)",
                        backgroundColor: ['rgba(0, 200, 0, 0.7)',
                            'rgba(200, 200, 0, 0.7)',
                            'rgba(0, 200, 200, 0.7)',
                            'rgba(200, 0, 200, 0.7)'],
                        borderColor: 'rgba(0, 0, 0, 0.2)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                legend: {
                    display: true
                },
                scale: {
                    ticks: {
                        min: 0,
                        max: 100
                    }
                }
            }
        });

        this.movementStackedHoursChart = new Chart('movementStackedHoursCanvas', {
            type: 'bar',
            data: {
                labels: movementHoursDates,
                xAxisID: "temps",
                yAxisID: "mouvement",
                datasets: [
                    {
                        data: movementHoursPercentage,
                        label: "Mouvement par tranche de x min sur 4h (%)",
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

    switchStepped() {
        this.steppedActive = !this.steppedActive;
    }
    switchStacked() {
        this.stackedActive = !this.stackedActive;
    }
    switchPie() {
        this.pieActive = !this.pieActive;
    }

}
