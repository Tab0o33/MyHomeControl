import { Subject } from 'rxjs';


export class AlertService {

    alertsSubject = new Subject<any[]>();

    private alerts = [
        {
          physicalParameter: 'Mouvement',
          value: 1,
          unit: null
        },
        {
          physicalParameter: 'temperature',
          signe: 'upper',
          value: '42'
        }
    ];

    constructor() { }

    emitAlertSubject() {
        if (this.alerts)
          this.alertsSubject.next(this.alerts.slice());
      }


}