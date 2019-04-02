import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AutomatonsService } from '../../../services/data/automatons.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.less']
})
export class DashboardHomeComponent implements OnInit {

  connectedAutomatons$: Observable<any>;
  lastCreatedAutomatons$: Observable<any>;

  constructor(
    public auth: AuthService,
    public automatonService: AutomatonsService
  ) {
    // Get connected automatons observable
    this.connectedAutomatons$ = this.automatonService.connectedAutomatons$;
    this.lastCreatedAutomatons$ = this.automatonService.lastCreatedAutomatons$;
  }

  ngOnInit() {
  }

}
