import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    authStatus: boolean;
    isExistingUser: boolean = true;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {
        this.authStatus = this.authService.isAuth;
    }

    onSignIn() {
        this.authService.signInUser('toto@toto.com', 'tototo').then(
            () => {
                console.log('login successful!');
                this.authStatus = this.authService.isAuth;
                this.router.navigate(['currentMeasure']);
            }
        );
    }

    onSignOut() {
        this.authService.signOutUser();
        console.log('logout successful!');
        this.authStatus = this.authService.isAuth;
    }

    switchAuthComponent(){
        this.isExistingUser = !this.isExistingUser;
    }
    
}
