import { NgModule } from "@angular/core";
import { HistoryModule } from "./history/history.module";
import { AlertsModule } from "./alerts/alerts.module";

@NgModule({
    exports: [
        HistoryModule,
        AlertsModule
    ]
})
export class ComponentModule { }