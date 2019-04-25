import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MeasureHistoryComponent } from './measure-history/measure-history.component';
import { TemperatureChartComponent } from './temperature-chart/temperature-chart.component';
import { PressureChartComponent } from './pressure-chart/pressure-chart.component';
import { MovementChartComponent } from './movement-chart/movement-chart.component';
import { HumidityChartComponent } from './humidity-chart/humidity-chart.component';
import { LuminosityChartComponent } from './luminosity-chart/luminosity-chart.component';


@NgModule({
    declarations: [
        MeasureHistoryComponent,
        TemperatureChartComponent,
        PressureChartComponent,
        MovementChartComponent,
        HumidityChartComponent,
        LuminosityChartComponent,
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        MeasureHistoryComponent
    ],
    providers: [
    ]
})
export class HistoryModule {
}