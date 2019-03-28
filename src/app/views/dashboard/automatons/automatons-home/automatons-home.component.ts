import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AutomatonsService } from '../../../../services/data/automatons.service';

@Component({
  selector: 'app-automatons-home',
  templateUrl: './automatons-home.component.html',
  styleUrls: ['./automatons-home.component.less']
})
export class AutomatonsHomeComponent implements OnInit {

  automatons$: Observable<any>;
  connectedAutomatons$: Observable<any>;

  constructor(
    private automatonService: AutomatonsService
  ) {
    this.automatons$ = this.automatonService.automatons$;
    this.connectedAutomatons$ = this.automatonService.connectedAutomatons$;
  }

  ngOnInit() {
  }

}
