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
        const startDate = form.value.severalDaysStartDatePicker._d;
        const endDate = form.value.severalDaysEndDatePicker._d;

        const toto = {
            physicalParameter: 'movement',
            allTheTime: true,
            startDate: startDate,
            endDate: endDate
        };
        this.saveAlert(toto)
    }

    switchAllDays(){
        this.allDays = !this.allDays;
    }

    switchAllTheDay(){
        this.allTheDay = !this.allTheDay;
    }

    switchSeveralDays(){
        this.severalDays = !this.severalDays;
        console.log(this.severalDays);
    }

    saveAlert(alert){
        this.alertService.addOneAlert(alert);
    }

    

}
