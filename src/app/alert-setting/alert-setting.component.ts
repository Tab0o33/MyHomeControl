import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-alert-setting',
  templateUrl: './alert-setting.component.html',
  styleUrls: ['./alert-setting.component.scss']
})
export class AlertSettingComponent implements OnInit {

    eventTargetValue: string;

    alerts = [
        {
        name: "toto"
        },
        {
        name: "titi"
        }
    ];

    showForm = false;

    userForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.userForm = this.formBuilder.group({
        parameter: '',
        signe: '',
        pValue:''
        });
    }

    onSubmitForm() {
        const formValue = this.userForm.value;
        console.log(formValue);
    }

    addAlertSwitcher(){
        this.showForm = !this.showForm;
    }

    changeParameter(eventTargetValue){
            this.eventTargetValue = eventTargetValue;
    }

}
