import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from '../alert.service';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../Authentication/auth.service';

@Component({
    selector: 'app-alert-setting',
    templateUrl: './alert-setting.component.html',
    styleUrls: ['./alert-setting.component.scss',
        '../../../material-design.css']
})
export class AlertSettingComponent implements OnInit, OnDestroy {

    alertSubscription: Subscription;
    userIDSubscription: Subscription;

    physicalParameterInput: string = '';

    movementHidden: boolean = false;
    temperatureHidden: boolean = false;
    pressureHidden: boolean = false;
    humidityHidden: boolean = false;
    luminosityHidden: boolean = false;

    countMovementAlerts: number = 0;
    countTemperatureAlerts: number = 0;
    countPressureAlerts: number = 0;
    countHumidityAlerts: number = 0;
    countLuminosityAlerts: number = 0;

    alerts = [];

    showForm = false;

    formPhysicalParameter: string = '';
    defaultPhyParam: string = 'movement';
    userID: any;

    constructor(private alertService: AlertService,
        private authService: AuthService) { }

    ngOnInit() {

        this.alertService.getUserID();
        this.alertSubscription = this.alertService.alertsSubject.subscribe(
            (alerts: any[]) => {
                this.alerts = alerts;

                this.alerts.forEach((element) => {
                    switch (element.physicalParameter) {
                        case 'movement':
                            this.countMovementAlerts++;
                            break;
                        case 'temperature':
                            this.countTemperatureAlerts++;
                            break;
                        case 'pressure':
                            this.countPressureAlerts++;
                            break;
                        case 'humidity':
                            this.countHumidityAlerts++;
                            break;
                        case 'luminosity':
                            this.countLuminosityAlerts++;
                            break;
                        default:
                            console.error("An alert have a not expected physical parameter value");
                    }
                });

            }
        );
        this.alertService.emitAlertSubject();

        

    }

    addAlertSwitcher() {
        this.showForm = !this.showForm;
        this.physicalParameterInput = '';
    }

    changePhysicalParameter(eventTargetValue) {
        this.physicalParameterInput = eventTargetValue;
    }

    switchMovementHidden() {
        this.movementHidden = !this.movementHidden;
    }

    switchTemperatureHidden() {
        this.temperatureHidden = !this.temperatureHidden;
    }

    switchPressureHidden() {
        this.pressureHidden = !this.pressureHidden;
    }

    switchHumidityHidden() {
        this.humidityHidden = !this.humidityHidden;
    }

    switchLuminosityHidden() {
        this.luminosityHidden = !this.luminosityHidden;
    }

    ngOnDestroy(){
        console.log("onDestroy");
    }

}
