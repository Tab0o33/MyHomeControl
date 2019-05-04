import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Subscription, Subject } from 'rxjs';

@Injectable()
export class AuthService {

  isAuth = false;

  userIDSubscription: Subscription;

  uID;

  userIDSubject = new Subject<any>();

  constructor(public afAuth: AngularFireAuth,
              public router: Router) { 

      this.userIDSubscription = this.afAuth.authState.subscribe(user => {
        try {
          this.uID = user.uid
          console.log("auth getUserID : " + this.uID);
          this.emitUserIDSubject();
          //return this.uID;
        } catch (err) {
          console.log("Aucun utilisateur connecté");
        }
      })
      
    }

    emitUserIDSubject() {
      //if (this.uID)
        this.userIDSubject.next(this.uID);
        console.log("authService emit userID :" + this.uID);
    }

  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            console.log('createNewUser successful!');
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            console.log('signInUser successful!');
            this.isAuth = true;
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOutUser() {
    firebase.auth().signOut();
    console.log('signOutUser successful!');
    this.router.navigate(['/auth']);
    this.isAuth = false;
    location.reload(true);
  }

}