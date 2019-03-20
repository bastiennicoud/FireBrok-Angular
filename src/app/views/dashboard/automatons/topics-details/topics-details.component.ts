import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-topics-details',
  templateUrl: './topics-details.component.html',
  styleUrls: ['./topics-details.component.less']
})
export class TopicsDetailsComponent implements OnInit {

  topic$: Observable<any>;
  flux$: Observable<any>;

  heatMapDatas: object;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestore: AngularFirestore
  ) {
    // Prepare graph dates
    this.heatMapDatas = {
      labels: ['tutu', 'toto'],
      datasets: [
        { values: [10, 30] }
      ]
    };
  }

  ngOnInit() {
    // Get topic details observable
    this.topic$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.firestore
          .doc(`/automatons/${params.get('automaton_id')}/topics/${params.get('topic_id')}`)
          .valueChanges().pipe(
            map(e => {
              return { id: params.get('id'), ...e };
            })
        );
      })
    );
    // Get topic flux
    this.flux$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.firestore.collection(
          `/automatons/${params.get('automaton_id')}/topics/${params.get('topic_id')}/flux`,
          ref => ref.orderBy('timestamp', 'desc').limit(40)
        ).valueChanges().pipe(map((flux: Array<any>) => {
          return {
            labels: flux.map(e => e.timestamp.toDate().toLocaleDateString()),
            datasets: [
              { values: flux.map(e => e.message )}
            ]
          };
        }));
      })
    );
  }

}
