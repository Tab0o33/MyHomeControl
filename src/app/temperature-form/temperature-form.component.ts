import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-temperature-form',
    templateUrl: './temperature-form.component.html',
    styleUrls: ['./temperature-form.component.scss']
})
export class TemperatureFormComponent implements OnInit {

    allTheTime: boolean = true;
    severalDays: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
    }

    switchAllTheTime(){
        this.allTheTime = !this.allTheTime;
    }

    switchSeveralDays(){
        this.severalDays = !this.severalDays;
        console.log(this.severalDays);
    }

}
