import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertService } from '../services/alert.service';

@Component({
    selector: 'app-temperature-form',
    templateUrl: './temperature-form.component.html',
    styleUrls: ['./temperature-form.component.scss']
})
export class TemperatureFormComponent implements OnInit {

    allDays: boolean = true;
    allTheDay: boolean = true;
    severalDays: boolean = false;

    defaultSigne = 'upper';

    oneDayDatePickerOptions = {
        format: 'L'
    };

    severalDaysStartDatePickerOptions = {
        format: 'L'
    };

    severalDaysEndDatePickerOptions = {
        format: 'L'
    };

    startTimePickerOptions = {
        format: 'LT'
    };

    endTimePickerOptions = {
        format: 'LT'
    };

    constructor(private alertService: AlertService) { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
        const allDays: boolean = form.value.allDaysCbox;
        const allTheDay: boolean = form.value.allTheDayCbox;
        const signe: string = form.value.signe;
        const value: number = form.value.tempValue;
        var severalDays: boolean = false;
        var oneDayDate: string;
        var severalDaysStartDate = '';//form.value.severalDaysStartDatePicker._d;
        var severalDaysEndDate = '';//form.value.severalDaysEndDatePicker._d;
        var startTime: string = '';
        var endTime: string = '';

        var toto: any = {
            physicalParameter: 'temperature',
            signe: signe,
            value: value,
            allDays: allDays,
            allTheDay: allTheDay
        };

        if (!allDays) {
            if (form.value.severalDaysStartDatePicker) {
                severalDays = true;
                severalDaysStartDate = form.value.severalDaysStartDatePicker._d.getTime();
                severalDaysEndDate = form.value.severalDaysEndDatePicker._d.getTime();
                toto.severalDays = severalDays;
                toto.severalDaysStartDate = severalDaysStartDate;
                toto.severalDaysEndDate = severalDaysEndDate;
            }
            else {
                let jsdate = new Date(form.value.oneDayDatePicker._d.getTime());
                jsdate.toLocaleTimeString('fr', { year: 'numeric', month: 'short', day: 'numeric' });
                severalDays = false;
                oneDayDate = form.value.oneDayDatePicker._d;
                toto.severalDays = severalDays;
                toto.oneDayDate = oneDayDate;
            }

        }

        if (!allTheDay) {
            //var date = new Date(time*1000);
            startTime = form.value.startTimePicker._d.getHours() + "h " + form.value.startTimePicker._d.getMinutes() + "min ";
            endTime = form.value.endTimePicker._d.getHours() + "h " + form.value.endTimePicker._d.getMinutes() + "min ";
            toto.startTime = startTime;
            toto.endTime = endTime;
        }
        console.log(toto);
        this.saveAlert(toto);

    }

    /*switchAllDays(event){
        console.log(event.target);
        this.allDays = !this.allDays;
    }
    
    switchAllTheDay(){
        this.allTheDay = !this.allTheDay;
    }*/

    switchSeveralDays() {
        this.severalDays = !this.severalDays;
        console.log(this.severalDays);
    }

    saveAlert(alert) {
        this.alertService.addOneAlert(alert);
    }



}
