import { Component } from '@angular/core';
import { AuthService } from './Authentication/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss',
                '../material-design.css']
})
export class AppComponent {

    constructor(public authService: AuthService){}

    signOut() {
        this.authService.signOutUser();
    }
}
