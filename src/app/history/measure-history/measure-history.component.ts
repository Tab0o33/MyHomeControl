import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-measure-history',
    templateUrl: './measure-history.component.html',
    styleUrls: ['./measure-history.component.scss']
})

export class MeasureHistoryComponent implements OnInit {

    name: string;
    tabActivated: string = 'movement';

    constructor() { }

    ngOnInit() { }

    openTab(tab: string) {
        this.tabActivated = tab;
        console.log(this.tabActivated);
    }

}
