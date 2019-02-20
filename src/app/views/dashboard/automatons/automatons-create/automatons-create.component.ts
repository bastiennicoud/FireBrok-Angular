import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-automatons-create',
  templateUrl: './automatons-create.component.html',
  styleUrls: ['./automatons-create.component.less']
})
export class AutomatonsCreateComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, [Validators.minLength(2), Validators.maxLength(60), Validators.required]],
      description: [null, [Validators.max(400)]]
    });
  }

  submitForm(): void {
    for (const i in this.form.controls) {
      this.form.controls[ i ].markAsDirty();
      this.form.controls[ i ].updateValueAndValidity();
    }
    console.log(this.form);
  }

}
