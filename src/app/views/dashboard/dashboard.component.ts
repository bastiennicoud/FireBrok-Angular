import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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

  constructor(
    private message: NzMessageService,
    private firestore: AngularFirestore
  ) {
    this.topic = firestore
      .collection('automatons/raspberry/topics')
      .valueChanges();
  }
  submitForm() {
    this.message.success('Youpii bravo !');
  }

  ngOnInit() {
  }

}
