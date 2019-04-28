import { NgModule } from "@angular/core";
import { HistoryModule } from "./history/history.module";
import { AlertsModule } from "./alerts/alerts.module";
import { AuthModule } from "./Authentication/auth.module";

@NgModule({
    exports: [
        HistoryModule,
        AlertsModule,
        AuthModule
    ]
})
export class ComponentModule { }