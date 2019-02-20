import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-automatons-create',
  templateUrl: './automatons-create.component.html',
  styleUrls: ['./automatons-create.component.less']
})
export class AutomatonsCreateComponent implements OnInit {

  loading: boolean;
  form: FormGroup;
  createAutomaton;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private message: NzMessageService,
    private functions: AngularFireFunctions
  ) {
    this.loading = false;
    // Get a reference to firebase function
    this.createAutomaton = functions.httpsCallable('create_automaton');
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
  }

  submitForm(): void {
    this.loading = true;
    this.createAutomaton(this.form.getRawValue()).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.router.navigate([`/dashboard/automatons`, data.automatonId]);
    }, err => {
      console.error(err);
      this.loading = false;
    });
  }

}
