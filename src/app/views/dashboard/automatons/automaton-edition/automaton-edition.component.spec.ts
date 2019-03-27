import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatonEditionComponent } from './automaton-edition.component';

describe('AutomatonEditionComponent', () => {
  let component: AutomatonEditionComponent;
  let fixture: ComponentFixture<AutomatonEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomatonEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatonEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
