import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { AngularFireFunctions } from '@angular/fire/functions';

@Component({
  selector: 'app-automatons-create',
  templateUrl: './automatons-create.component.html',
  styleUrls: ['./automatons-create.component.less']
})
export class AutomatonsCreateComponent implements OnInit {

  form: FormGroup;
  createAutomaton;

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private functions: AngularFireFunctions
  ) {
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
    this.createAutomaton(this.form.getRawValue()).subscribe(data => {
      console.log(data);
    }, err => {
      console.error(err);
    });
  }

}
