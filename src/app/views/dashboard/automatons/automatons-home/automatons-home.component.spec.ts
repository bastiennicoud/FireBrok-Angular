import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatonsHomeComponent } from './automatons-home.component';

describe('AutomatonsHomeComponent', () => {
  let component: AutomatonsHomeComponent;
  let fixture: ComponentFixture<AutomatonsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomatonsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatonsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
