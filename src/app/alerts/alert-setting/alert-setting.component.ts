import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-alert-setting',
  templateUrl: './alert-setting.component.html',
  styleUrls: ['./alert-setting.component.scss',
              '../../../material-design.css']
})
export class AlertSettingComponent implements OnInit {

    alertSubscription: Subscription;

    physicalParameterInput: string ='';

    movementHidden: boolean = false;
    temperatureHidden: boolean = false;

    alerts = [];

    showForm = false;


    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertSubscription = this.alertService.alertsSubject.subscribe(
            (alerts: any[]) => {
              this.alerts = alerts;
            }
          );
          this.alertService.emitAlertSubject();
    }

    addAlertSwitcher(){
        this.showForm = !this.showForm;
        this.physicalParameterInput ='';
    }

    changePhysicalParameter(eventTargetValue){
            this.physicalParameterInput = eventTargetValue;
    }

    switchMovementHidden(){
        this.movementHidden = !this.movementHidden
    }

    switchTemperatureHidden(){
        this.temperatureHidden = !this.temperatureHidden
    }

}
