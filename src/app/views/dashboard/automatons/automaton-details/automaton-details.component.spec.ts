import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatonDetailsComponent } from './automaton-details.component';

describe('AutomatonDetailsComponent', () => {
  let component: AutomatonDetailsComponent;
  let fixture: ComponentFixture<AutomatonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomatonDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
