import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatonsCreateComponent } from './automatons-create.component';

describe('AutomatonsCreateComponent', () => {
  let component: AutomatonsCreateComponent;
  let fixture: ComponentFixture<AutomatonsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomatonsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatonsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
