import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;
    errorMessage: string;

    @Output() linkClicked = new EventEmitter<boolean>();

    constructor(private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.signupForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
            passwordConfirmation: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
        });
    }

    onSubmit() {
        const email = this.signupForm.get('email').value;
        const password = this.signupForm.get('password').value;
        const passwordConfirmation = this.signupForm.get('passwordConfirmation').value;

        if (passwordConfirmation === password) {
            this.authService.createNewUser(email, password).then(
                () => {
                    this.router.navigate(['/currentMeasure']);
                },
                (error) => {
                    this.errorMessage = error;
                }
            );
        }
        else {
            this.errorMessage = 'Le champ de confirmation ne correspond pas au mot de passe';
            this.signupForm.patchValue({
                password: '', 
                passwordConfirmation: ''
              });
        }
    }

    onLinkClicked() {
        this.linkClicked.emit();
    }

}