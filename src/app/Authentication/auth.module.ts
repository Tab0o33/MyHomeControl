import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        AuthComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
    ],
    providers: [
        AuthService,
        AuthGuard
    ]
})
export class AuthModule {
}