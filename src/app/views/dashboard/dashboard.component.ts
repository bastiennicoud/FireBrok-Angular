import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  isCollapsed = false;
  isReverseArrow = false;
  width = 240;

  constructor(private message: NzMessageService) {}
  submitForm() {
    this.message.success('Youpii bravo !');
  }

  ngOnInit() {
  }

}
