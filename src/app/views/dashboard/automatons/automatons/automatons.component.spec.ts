import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatonsComponent } from './automatons.component';

describe('AutomatonsComponent', () => {
  let component: AutomatonsComponent;
  let fixture: ComponentFixture<AutomatonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomatonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
