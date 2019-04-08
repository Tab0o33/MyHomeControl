import { Component, OnInit } from '@angular/core';
import { MeasureService } from '../services/measure.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-current-measure',
  templateUrl: './current-measure.component.html',
  styleUrls: ['./current-measure.component.scss']
})
export class CurrentMeasureComponent implements OnInit {

  measures: any[];
  measureSubscription: Subscription;

  constructor(private measureService: MeasureService) { }

  ngOnInit() {
    this.measureSubscription = this.measureService.measuresSubject.subscribe(
      (measures: any[]) => {
        this.measures = measures;
      }
    );
    this.measureService.emitMeasureSubject();
  }

  /*onSave() {
    this.measureService.saveMeasuresToServer();
  }

  onFetch() {
    this.measureService.getMeasuresFromServer();
  }*/

  getLuminosityPercentage(){
    switch (this.measures[4].value) {
      case 'jour':
        console.log('jour');
        return '100%'
      case 'éclairé':
        console.log('éclairé');
        return '66%'
      case 'sombre':
        console.log('sombre');
        return '33%'
      case 'noir':
        console.log('noir');
        return '0%'
      default:
        console.log('err.');
        return '50%'
    }
  }

  getMouvementPercentage(){
    return this.measures[0].value*100 + '%';
  }

  getMovementLabel(){
    if (this.measures[0].value)
      return 'Oui';
    else
      return 'Non';
  }

  getTemperaturePercentage(){
    return 2*this.measures[1].value + '%';
  }

  getHumidityPercentage(){
    return this.measures[3].value + '%';
  }

  getPressionPercentage(){
    const valMin = 1000 ;
    const valMax = 1030 ;
    const scale = valMax - valMin;

    return (this.measures[2].value- valMin)/(valMax- valMin)*100 + '%';
  }

}
