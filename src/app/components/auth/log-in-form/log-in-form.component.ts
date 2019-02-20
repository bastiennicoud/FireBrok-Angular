import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.less']
})
export class LogInFormComponent implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  constructor(
    private fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required, Validators.email ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

  logIn (): void {
    this.router.navigate(['/dashboard']);
  }

}
