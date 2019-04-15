import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component'; 
import { CurrentMeasureComponent } from './current-measure/current-measure.component';
import { MeasureHistoryComponent } from './measure-history/measure-history.component';
import { AlertSettingComponent } from './alert-setting/alert-setting.component'; 

import { MeasureService } from './services/measure.service';
import { AlertService } from './services/alert.service';

import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireAuthModule } from 'angularfire2/auth';
//import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { TemperatureChartComponent } from './temperature-chart/temperature-chart.component';
import { PressureChartComponent } from './pressure-chart/pressure-chart.component';
import { MovementChartComponent } from './movement-chart/movement-chart.component';
import { HumidityChartComponent } from './humidity-chart/humidity-chart.component';
import { LuminosityChartComponent } from './luminosity-chart/luminosity-chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemperatureFormComponent } from './temperature-form/temperature-form.component';
import { AlertItemComponent } from './alert-item/alert-item.component';

import { NgTempusdominusBootstrapModule } from 'ngx-tempusdominus-bootstrap';
 
const appRoutes: Routes = [
  { path: 'currentMeasure', component: CurrentMeasureComponent },
  { path: 'history', component: MeasureHistoryComponent },
  { path: 'history/:id', component: MeasureHistoryComponent },
  { path: 'alterts', component: AlertSettingComponent },
  { path: '', component: CurrentMeasureComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' } 
];
 
@NgModule({
  declarations: [
    AppComponent,
    CurrentMeasureComponent,
    MeasureHistoryComponent,
    AlertSettingComponent,
    FourOhFourComponent,
    TemperatureChartComponent,
    PressureChartComponent,
    MovementChartComponent,
    HumidityChartComponent,
    LuminosityChartComponent,
    TemperatureFormComponent,
    AlertItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    //AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    NgTempusdominusBootstrapModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    MeasureService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
