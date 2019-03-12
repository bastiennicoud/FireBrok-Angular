import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  isCollapsed = false;
  isReverseArrow = false;
  width = 240;

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() { }

}
