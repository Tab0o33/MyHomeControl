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

    oneDayDatePickerOptions = { format: 'L' };
    severalDaysStartDatePickerOptions = { format: 'L' };
    severalDaysEndDatePickerOptions = { format: 'L' };
    startTimePickerOptions = { format: 'LT' };
    endTimePickerOptions = { format: 'LT' };

    constructor(private alertService: AlertService) { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        const allDays: boolean = form.value.allDaysCbox;
        const allTheDay: boolean = form.value.allTheDayCbox;
        const signe: string = form.value.signe;
        const value: number = form.value.tempValue;
        var severalDays: boolean = false;
        var oneDayDate: string;
        var severalDaysStartDate = '';
        var severalDaysEndDate = '';
        var startTime: string = '';
        var endTime: string = '';

        //Alert initilization
        var alert: any = {
            physicalParameter: 'temperature',
            signe: signe,
            value: value,
            allDays: allDays,
            allTheDay: allTheDay,
            message: 'Default message'
        };

        //Alert modification
        if (!allDays) {
            if (form.value.severalDaysStartDatePicker) {
                severalDays = true;
                severalDaysStartDate = form.value.severalDaysStartDatePicker;
                severalDaysEndDate = form.value.severalDaysEndDatePicker;
                alert.severalDays = severalDays;
                alert.severalDaysStartDate = severalDaysStartDate;
                alert.severalDaysEndDate = severalDaysEndDate;
            }
            else {
                severalDays = false;
                oneDayDate = form.value.oneDayDatePicker;
                alert.severalDays = severalDays;
                alert.oneDayDate = oneDayDate;
            }
        }
        if (!allTheDay) {
            startTime = form.value.startTimePicker;
            endTime = form.value.endTimePicker;
            alert.startTime = startTime;
            alert.endTime = endTime;
        }

        //Alert message modification
        if (allDays) {
            if (allTheDay) {
                alert.message = 'Alerte si la température est ' + ((alert.signe === 'upper') ? 'suppérieure' : 'inférieure')
                    + ' à ' + alert.value + '°C';
            } else {
                alert.message = 'Alerte si la température est ' + ((alert.signe === 'upper') ? 'suppérieure' : 'inférieure')
                    + ' à ' + alert.value + '°C entre ' + alert.startTime._d.getHours() + 'h' + alert.startTime._d.getMinutes()
                    + 'min et ' + alert.endTime._d.getHours() + 'h' + alert.endTime._d.getMinutes() + 'min';
            }
        }
        else {
            if (allTheDay) {
                if (!alert.severalDays) {
                    alert.message = 'Alerte si la température est ' + ((alert.signe === 'upper') ? 'suppérieure' : 'inférieure')
                        + ' à ' + alert.value + '°C le ' + alert.oneDayDate._d.toLocaleDateString('fr', { year: 'numeric', month: 'long', day: 'numeric' });
                }
                else {
                    alert.message = 'Alerte si la température est ' + ((alert.signe === 'upper') ? 'suppérieure' : 'inférieure')
                        + ' à ' + alert.value + '°C entre le ' + alert.severalDaysStartDate._d.toLocaleDateString('fr', { year: 'numeric', month: 'long', day: 'numeric' })
                        + ' et le ' + alert.severalDaysEndDate._d.toLocaleDateString('fr', { year: 'numeric', month: 'long', day: 'numeric' });
                }

            } else {
                if (!alert.severalDays) {
                    alert.message = 'Alerte si la température est ' + ((alert.signe === 'upper') ? 'suppérieure' : 'inférieure')
                        + ' à ' + alert.value + '°C le ' + alert.oneDayDate._d.toLocaleDateString('fr', { year: 'numeric', month: 'long', day: 'numeric' })
                        + ' entre ' + alert.startTime._d.getHours() + 'h' + alert.startTime._d.getMinutes() + 'min et ' + alert.endTime._d.getHours() + 'h'
                        + alert.endTime._d.getMinutes() + 'min';
                }
                else {
                    alert.message = 'Alerte si la température est ' + ((alert.signe === 'upper') ? 'suppérieure' : 'inférieure')
                        + ' à ' + alert.value + '°C entre le ' + alert.severalDaysStartDate._d.toLocaleDateString('fr', { year: 'numeric', month: 'long', day: 'numeric' })
                        + ' et le ' + alert.severalDaysEndDate._d.toLocaleDateString('fr', { year: 'numeric', month: 'long', day: 'numeric' })
                        + ' entre ' + alert.startTime._d.getHours() + 'h' + alert.startTime._d.getMinutes()
                        + 'min et ' + alert.endTime._d.getHours() + 'h' + alert.endTime._d.getMinutes() + 'min';
                }
            }
        }

        this.saveAlert(alert);
    }

    switchSeveralDays() {
        this.severalDays = !this.severalDays;
        console.log(this.severalDays);
    }

    saveAlert(alert) {
        this.alertService.addOneAlert(alert);
    }



}
