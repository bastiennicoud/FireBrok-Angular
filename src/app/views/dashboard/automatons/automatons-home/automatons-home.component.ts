import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-automatons-home',
  templateUrl: './automatons-home.component.html',
  styleUrls: ['./automatons-home.component.less']
})
export class AutomatonsHomeComponent implements OnInit {

  loading = false;
  automatons$: Observable<any>;
  connectedAutomatons$: Observable<any>;

  constructor(
    private firestore: AngularFirestore
  ) {
    // Get the observable for automatons
    this.automatons$ = firestore.collection(
      'automatons'
    ).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        return {
          id: a.payload.doc.id,
          ...a.payload.doc.data()
        };
      }))
    );
    // Get the observable for connected automatons
    this.connectedAutomatons$ = firestore.collection(
      'automatons',
      ref => ref.where('connected', '==', true)
    ).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        return {
          id: a.payload.doc.id,
          ...a.payload.doc.data()
        };
      }))
    );
  }

  ngOnInit() {
  }

}
