import { Subject } from 'rxjs';


export class AlertService {

    alertsSubject = new Subject<any[]>();

    private alerts = [
        {
          physicalParameter: 'movement',
          everyDay: true,
          startDate: '23:00:00',
          endDate: '06:00:00'
        },
        {
          physicalParameter: 'movement',
          everyDay: false,
          startDate: '23/12/2019',
          endDate: '29/12/2019'
        },
        {
          physicalParameter: 'temperature',
          signe: 'upper',
          value: '32'
        },
        {
          physicalParameter: 'temperature',
          signe: 'lower',
          value: '17'
        }
    ];

    constructor() { }

    emitAlertSubject() {
        if (this.alerts)
          this.alertsSubject.next(this.alerts.slice());
      }


}