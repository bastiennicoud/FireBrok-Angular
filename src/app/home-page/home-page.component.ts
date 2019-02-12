import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  automatons: Observable<any>;

  constructor(public firestore: AngularFirestore) {
    this.automatons = firestore.collection('automatons').valueChanges();
  }

  ngOnInit() {
  }

}
