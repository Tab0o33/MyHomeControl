import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
    declarations: [
        AuthComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
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