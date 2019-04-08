//import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database'; 
import * as firebase from 'firebase/app';
import { Subject, Observable, Subscription } from 'rxjs';

@Injectable()

export class MeasureService {
  
    measuresSubject = new Subject<any[]>();

    private measures = [
        /*{
          name: 'Mouvement',
          value: 1,
          unit: null
        },
        {
          name: 'Température',
          value: 25,
          unit: '°C'
        },
        {
          name: 'Pression',
          value: 154565,
          unit: 'hPa'
        },
        {
          name: 'Humidité',
          value: 40,
          unit: '%'
        },
        {
          name: 'Luminosité',
          value: 'Jour',
          unit: null
        }*/ 
    ];

    constructor(private httpClient: HttpClient,
                public afDB: AngularFireDatabase) { 

      afDB.list<any>('/measures').valueChanges().subscribe(
        (value) => {
          this.measures = value;
          this.emitMeasureSubject();
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('Observable complete!');
        }
      );
    }

    emitMeasureSubject() {
      if (this.measures)
        this.measuresSubject.next(this.measures.slice());
    }

    /*saveMeasuresToServer() {
        firebase.database().ref('/measures').set(this.measures);
    }*/

    /*getMeasuresFromServer() {
        this.httpClient
          .get<any[]>('https://myhomecontrol-7c1c7.firebaseio.com/measures.json')
          .subscribe(
            (response) => {
              this.measures = response;
              this.emitMeasureSubject();
            },
            (error) => {
              console.log('Erreur ! : ' + error);
            }
          );
    }*/

}