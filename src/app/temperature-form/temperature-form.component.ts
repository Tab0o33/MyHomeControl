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
        var severalDays: boolean = false;
        var oneDayDate: string = '';
        var severalDaysStartDate = '';//form.value.severalDaysStartDatePicker._d;
        var severalDaysEndDate = '';//form.value.severalDaysEndDatePicker._d;
        var startTime: string = '';
        var endTime: string = '';

        var toto: any = {
            physicalParameter: 'temperature',
            allDays: allDays,
            allTheDay: allTheDay
        };

        if (!allDays){
            if (form.value.severalDaysStartDatePicker){
                severalDays = true;
                severalDaysStartDate = form.value.severalDaysStartDatePicker._d;
                severalDaysEndDate = form.value.severalDaysEndDatePicker._d;
                toto.severalDays = severalDays;
                toto.severalDaysStartDate = severalDaysStartDate;
                toto.severalDaysEndDate = severalDaysEndDate;
            }
            else{
                severalDays = false;
                oneDayDate = form.value.oneDayDatePicker._d;
                toto.severalDays = severalDays;
                toto.oneDayDate = oneDayDate;
            }
            
        }

        if (!allTheDay){
            startTime = form.value.startTimePicker._d;
            endTime = form.value.endTimePicker._d;
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

    switchSeveralDays(){
        this.severalDays = !this.severalDays;
        console.log(this.severalDays);
    }

    saveAlert(alert){
        this.alertService.addOneAlert(alert);
    }

    

}
