import { Subject } from 'rxjs';


export class AlertService {

    alertsSubject = new Subject<any[]>();

    private alerts = [
        {
          physicalParameter: 'movement',
          allTheTime: true,
          startDate: '23:00:00',
          endDate: '06:00:00'
        },
        {
          physicalParameter: 'movement',
          allTheTime: false,
          startDate: '23/12/2019',
          endDate: '29/12/2019'
        },
        {
          physicalParameter: 'temperature',
          signe: 'upper',
          value: '32',
          allTheTime: true
        },
        {
          physicalParameter: 'temperature',
          signe: 'lower',
          value: '17',
          allTheTime: true
        }
    ];

    constructor() { }

    emitAlertSubject() {
        if (this.alerts)
          this.alertsSubject.next(this.alerts.slice());
    }


    deleteOneAlert(i: number) {
        console.log(i);
        this.alerts.splice(i,1);
        this.emitAlertSubject();
    }

    addOneAlert(alert){
        this.alerts.push(alert);
        this.emitAlertSubject();
    }


}