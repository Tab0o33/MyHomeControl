import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Subject, Observable, Subscription } from 'rxjs';

@Injectable()


export class AlertService {

  alertsSubject = new Subject<any[]>();

  private alerts = [
    /*{
      physicalParameter: 'movement',
      allTheTime: true,
      startDate: '23:00:00',
      endDate: '06:00:00',
      message: 'Alerte si un mouvement est détecté entre 23h00 et 06h00'
    },
    {
      physicalParameter: 'movement',
      allTheTime: false,
      startDate: '23/12/2019',
      endDate: '29/12/2019',
      message: 'Alerte si un mouvement est détecté entre le 23/12/2019 et le 29/12/2019'
    },
    {
      physicalParameter: 'temperature',
      signe: 'upper',
      value: '32',
      allTheDay: true,
      allDays: true,
      message: 'Alerte si la température est suppérieure à 32°C'
    },
    {
      physicalParameter: 'temperature',
      signe: 'lower',
      value: '17',
      allTheDay: true,
      allDays: true,
      message: 'Alerte si la température est inférieure à 17°C'
    }*/
  ];

  constructor(private httpClient: HttpClient,
    public afDB: AngularFireDatabase) {

    afDB.list<any>('/alerts').valueChanges().subscribe(
      (value) => {
        this.alerts = value;
        this.emitAlertSubject();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  emitAlertSubject() {
    if (this.alerts)
      this.alertsSubject.next(this.alerts.slice());
  }


  deleteOneAlert(i: number) {
    console.log(i);
    this.alerts.splice(i, 1);
    this.saveMeasuresToServer();
    this.emitAlertSubject();
  }

  addOneAlert(alert) {
    this.alerts.push(alert);
    
    this.emitAlertSubject();
    this.saveMeasuresToServer();
  }

  saveMeasuresToServer() {
    firebase.database().ref('/alerts').set(this.alerts);
  }


}