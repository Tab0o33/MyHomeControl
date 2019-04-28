import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertService } from '../alert.service';

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

    @Output() submitted = new EventEmitter<boolean>();

    constructor(private alertService: AlertService) { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        const allDays: boolean = form.value.allDaysCbox;
        const allTheDay: boolean = form.value.allTheDayCbox;
        const signe: string = form.value.signe;
        const value: number = form.value.tempValue;
        var severalDays: boolean = false;
        var oneDayDate: Date;
        var severalDaysStartDate: Date;
        var severalDaysEndDate: Date;
        var startTime: Date;
        var endTime: Date;

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
                severalDaysStartDate = new Date(form.value.severalDaysStartDatePicker._d.getTime());
                severalDaysEndDate = new Date(form.value.severalDaysEndDatePicker._d.getTime());
                alert.severalDays = severalDays;
                alert.severalDaysStartDate = severalDaysStartDate;
                alert.severalDaysEndDate = severalDaysEndDate;
            }
            else {
                severalDays = false;
                oneDayDate = new Date(form.value.oneDayDatePicker._d.getTime());
                alert.severalDays = severalDays;
                alert.oneDayDate = oneDayDate;
            }
        }
        if (!allTheDay) {
            startTime = new Date(form.value.startTimePicker._d);
            endTime = new Date(form.value.endTimePicker._d);
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
                    + ' à ' + alert.value + '°C entre ' + alert.startTime.getHours() + 'h' + alert.startTime.getMinutes()
                    + 'min et ' + alert.endTime.getHours() + 'h' + alert.endTime.getMinutes() + 'min';
            }
        }
        else {
            if (allTheDay) {
                if (!alert.severalDays) {
                    alert.message = 'Alerte si la température est ' + ((alert.signe === 'upper') ? 'suppérieure' : 'inférieure')
                        + ' à ' + alert.value + '°C le ' + alert.oneDayDate.toLocaleDateString('fr', { year: 'numeric', month: 'long', day: 'numeric' });
                }
                else {
                    alert.message = 'Alerte si la température est ' + ((alert.signe === 'upper') ? 'suppérieure' : 'inférieure')
                        + ' à ' + alert.value + '°C entre le ' + alert.severalDaysStartDate.toLocaleDateString('fr', { year: 'numeric', month: 'long', day: 'numeric' })
                        + ' et le ' + alert.severalDaysEndDate.toLocaleDateString('fr', { year: 'numeric', month: 'long', day: 'numeric' });
                }

            } else {
                if (!alert.severalDays) {
                    alert.message = 'Alerte si la température est ' + ((alert.signe === 'upper') ? 'suppérieure' : 'inférieure')
                        + ' à ' + alert.value + '°C le ' + alert.oneDayDate.toLocaleDateString('fr', { year: 'numeric', month: 'long', day: 'numeric' })
                        + ' entre ' + alert.startTime.getHours() + 'h' + alert.startTime.getMinutes() + 'min et ' + alert.endTime.getHours() + 'h'
                        + alert.endTime.getMinutes() + 'min';
                }
                else {
                    alert.message = 'Alerte si la température est ' + ((alert.signe === 'upper') ? 'suppérieure' : 'inférieure')
                        + ' à ' + alert.value + '°C entre le ' + alert.severalDaysStartDate.toLocaleDateString('fr', { year: 'numeric', month: 'long', day: 'numeric' })
                        + ' et le ' + alert.severalDaysEndDate.toLocaleDateString('fr', { year: 'numeric', month: 'long', day: 'numeric' })
                        + ' entre ' + alert.startTime.getHours() + 'h' + alert.startTime.getMinutes()
                        + 'min et ' + alert.endTime.getHours() + 'h' + alert.endTime.getMinutes() + 'min';
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
        console.log(alert);
        this.alertService.addOneAlert(alert);
        
        this.submitted.emit();
    }

    cancel(){
        this.submitted.emit();
    }



}
