import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
//Internal component
import { AppComponent } from './app.component'; 
import { CurrentMeasureComponent } from './current-measure/current-measure.component';
import { MeasureHistoryComponent } from './history/measure-history/measure-history.component';
import { AlertSettingComponent } from './alerts/alert-setting/alert-setting.component'; 
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthComponent } from './Authentication/auth/auth.component';
import { ProfilComponent } from './profil/profil.component';
import { ParametersComponent } from './parameters/parameters.component';

//Service
import { AlertService } from './alerts/alert.service';

import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireAuthModule } from 'angularfire2/auth';


import { environment } from '../environments/environment';
import { ComponentModule } from './component.module';
 
const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'currentMeasure'/*, canActivate: [AuthGuard]*/, component: CurrentMeasureComponent },
  { path: 'history'/*, canActivate: [AuthGuard]*/, component: MeasureHistoryComponent },
  { path: 'history/:id'/*, canActivate: [AuthGuard]*/, component: MeasureHistoryComponent },
  { path: 'alerts'/*, canActivate: [AuthGuard]*/, component: AlertSettingComponent },
  { path: 'profil'/*, canActivate: [AuthGuard]*/, component: ProfilComponent },
  { path: 'parameters'/*, canActivate: [AuthGuard]*/, component: ParametersComponent },
  { path: ''/*, canActivate: [AuthGuard]*/, component: AuthComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' } 
];
 
@NgModule({
  declarations: [
    AppComponent,
    CurrentMeasureComponent,
    ProfilComponent,
    ParametersComponent,
    FourOhFourComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    //AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    ComponentModule
  ],
  providers: [
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
