import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrappeGraphComponent } from './frappe-graph.component';

describe('FrappeGraphComponent', () => {
  let component: FrappeGraphComponent;
  let fixture: ComponentFixture<FrappeGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrappeGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrappeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
