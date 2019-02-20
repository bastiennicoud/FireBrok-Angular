import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireFunctions } from '@angular/fire/functions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  isCollapsed = false;
  isReverseArrow = false;
  width = 240;

  topic: Observable<any>;
  newAutomaton;

  constructor(
    private message: NzMessageService,
    private firestore: AngularFirestore,
    private functions: AngularFireFunctions
  ) {
    // Get datas as observable from firestore
    this.topic = firestore
      .collection('automatons/raspberry/topics')
      .valueChanges();
    // Get reference to the new automatons function
    this.newAutomaton = functions.httpsCallable('create_automaton');
  }
  submitForm() {
    this.message.success('Creation d\'un automate');
    let datas = this.newAutomaton({ name: 'testAutomaton' });
    datas.subscribe(r => {
      console.log(r);
    }, e => {
      console.error('Function error !', e);
    });
  }

  ngOnInit() {
  }

}
