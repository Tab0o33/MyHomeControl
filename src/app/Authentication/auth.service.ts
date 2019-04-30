import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

    isAuth = false;

    constructor(public afAuth: AngularFireAuth) { }

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
        this.isAuth = false;
    }
}