import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-automaton-details',
  templateUrl: './automaton-details.component.html',
  styleUrls: ['./automaton-details.component.less']
})
export class AutomatonDetailsComponent implements OnInit {

  isModalVisible = false;
  automaton$: Observable<any>;
  topics$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    // map the route parameters to get corresponding document
    this.automaton$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.firestore.doc(`/automatons/${params.get('id')}`).valueChanges().pipe(
          map(e => {
            return { id: params.get('id'), ...e };
          })
        );
      })
    );
    // Map automaton topics
    this.topics$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.firestore.collection(`/automatons/${params.get('id')}/topics`).snapshotChanges().pipe(
          map(actions => actions.map(a => {
            return {
              id: a.payload.doc.id,
              ...a.payload.doc.data()
            };
          }))
        );
      })
    );
  }

}
