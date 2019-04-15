import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-temperature-form',
    templateUrl: './temperature-form.component.html',
    styleUrls: ['./temperature-form.component.scss']
})
export class TemperatureFormComponent implements OnInit {

    allDays: boolean = true;
    allTheDay: boolean = true;
    severalDays: boolean = false;

    options = {
        format: 'L'
    };

    options2 = {
        format: 'L'
    };

    options3 = {
        format: 'L'
    };

    options4 = {
        format: 'LT'
    };

    options5 = {
        format: 'LT'
    };

    constructor() { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
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

}
