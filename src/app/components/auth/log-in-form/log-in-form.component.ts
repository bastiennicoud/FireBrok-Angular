import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.less']
})
export class LogInFormComponent implements OnInit {

  loading: boolean;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private message: NzMessageService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: [ null, [
        Validators.required,
        Validators.email
      ]],
      password: [ null, [
        Validators.required
      ]]
    });
  }

  logIn(): void {
    this.loading = true;
    this.auth.signIn(
      this.form.getRawValue().userName,
      this.form.getRawValue().password
    ).then(() => {
      this.message.success('Connexion réussie, bienvenue !');
      this.router.navigate(['/dashboard']);
    }).catch(() => {
      this.message.error('Identifiants incorects, verifiez vos informations');
      this.form.reset();
    }).finally(() => {
      this.loading = false;
    });
  }

}
