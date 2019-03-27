import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map, switchMap, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-automaton-edition',
  templateUrl: './automaton-edition.component.html',
  styleUrls: ['./automaton-edition.component.less']
})
export class AutomatonEditionComponent implements OnInit {

  automatonRef: AngularFirestoreDocument;
  loading: boolean;
  form: FormGroup;
  automaton$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestore: AngularFirestore,
    private fb: FormBuilder,
    private message: NzMessageService
  ) {
    this.loading = false;
  }

  ngOnInit() {
    // Register reactive form
    this.form = this.fb.group({
      name: [null, [
        Validators.minLength(2),
        Validators.maxLength(60),
        Validators.required
      ]],
      description: [null, [
        Validators.max(400)
      ]]
    });

    // map the route parameters to get corresponding document
    this.automaton$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // Sets the reference to automaton
        this.automatonRef = this.firestore.doc(`/automatons/${params.get('id')}`);
        return this.automatonRef.valueChanges().pipe(
          map(e => {
            return { id: params.get('id'), ...e };
          }),
          tap(automaton => {
            this.form.patchValue(automaton);
          })
        );
      })
    );
  }

  async submitForm() {
    this.loading = true;
    try {
      await this.automatonRef.update(this.form.getRawValue());
      this.message.success('L\'automate a bien été mis a jour.');
      this.router.navigate(['/dashboard/automatons', this.route.snapshot.params.id]);
    } catch (e) {
      this.message.error('Une erreur est survenue lors de la mise a jour des données.');
      console.log(e);
    } finally {
      this.loading = false;
    }
  }

}
