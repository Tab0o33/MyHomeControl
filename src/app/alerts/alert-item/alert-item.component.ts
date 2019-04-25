////https://tempusdominus.github.io/bootstrap-4/Usage/

import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-alert-item',
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.scss',
              '../../../material-design.css']
})
export class AlertItemComponent implements OnInit {

  @Input() message: string;
  @Input() index: number;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
      
  }

  onDeleteOne(){
    this.alertService.deleteOneAlert(this.index);
  }

}