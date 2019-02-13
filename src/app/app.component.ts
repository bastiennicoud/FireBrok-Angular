import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;
  isReverseArrow = false;
  width = 240;

  constructor(private message: NzMessageService) {}
  submitForm() {
    this.message.success('Youpii bravo !');
  }
}
