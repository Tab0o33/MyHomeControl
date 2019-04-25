import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { AlertItemComponent } from './alert-item/alert-item.component';
import { AlertSettingComponent } from './alert-setting/alert-setting.component';
import { TemperatureFormComponent } from './temperature-form/temperature-form.component';
import { NgTempusdominusBootstrapModule } from 'ngx-tempusdominus-bootstrap';
import { DatetimepickerComponent } from '../datetimepicker/datetimepicker.component';
import { MeasureService } from "../services/measure.service";


@NgModule({
    declarations: [
        AlertItemComponent,
        AlertSettingComponent,
        TemperatureFormComponent,
        DatetimepickerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NgTempusdominusBootstrapModule
    ],
    exports: [
    ],
    providers: [
        MeasureService
    ]
})
export class AlertsModule {
}