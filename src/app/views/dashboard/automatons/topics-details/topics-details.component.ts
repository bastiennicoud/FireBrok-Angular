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
  graphFlux$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestore: AngularFirestore
  ) { }

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
    // Get topic data flux
    this.flux$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // Get the corresponding flux collection
        return this.firestore.collection(
          `/automatons/${params.get('automaton_id')}/topics/${params.get('topic_id')}/flux`,
          ref => ref.orderBy('timestamp', 'desc').limit(40)
        ).valueChanges();
      })
    );
    // Generate one observable for the graph data
    this.graphFlux$ = this.flux$.pipe(
      // Map the observable stream to format the data for the graph
      map((flux: Array<any>) => {
        return {
          labels: flux.map(e => e.timestamp.toDate().toLocaleDateString()),
          datasets: [
            { values: flux.map(e => e.message )}
          ]
        };
      })
    );
  }

}
