import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-topics-details',
  templateUrl: './topics-details.component.html',
  styleUrls: ['./topics-details.component.less']
})
export class TopicsDetailsComponent implements OnInit {

  // Data observables
  topic$: Observable<any>;
  flux$: Observable<any>;
  graphFlux$: Observable<any>;

  // Slider value
  sliderValue: number;
  querySize$: BehaviorSubject<number>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestore: AngularFirestore
  ) {
    // Create a rx subject to dynamically update the topic query when size change
    this.sliderValue = 50;
    this.querySize$ = new BehaviorSubject(50);
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
    // Get topic data flux (generate a dynamic query with the switchmap operator)
    this.flux$ = combineLatest(
      this.route.paramMap,
      this.querySize$
    ).pipe(
      switchMap(([params, size]) => {
        // Return the firestore reference observable
        return this.firestore.collection(
          `/automatons/${params.get('automaton_id')}/topics/${params.get('topic_id')}/flux`,
          ref => ref
            .orderBy('timestamp', 'desc')
            .limit(size ? size : 50)
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
            {
              values: flux.map(e => e.message ),
              chartType: 'line'
            }
          ]
        };
      })
    );
  }

  onChange(value: number): void {
    this.querySize$.next(value);
  }

}
