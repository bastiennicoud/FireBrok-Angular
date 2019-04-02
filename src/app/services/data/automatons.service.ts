import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutomatonsService {

  automatons$: Observable<any>;
  connectedAutomatons$: Observable<any>;
  lastCreatedAutomatons$: Observable<any>;

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
    // Get the last 6 automaton created
    this.lastCreatedAutomatons$ = firestore.collection(
      'automatons',
      ref => ref.orderBy('created_at', 'desc')
    ).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        return {
          id: a.payload.doc.id,
          ...a.payload.doc.data()
        };
      }))
    );
  }
}
