import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandServicePaymentsStepsComponent } from './grand-service-payments-steps.component';

describe('GrandServicePaymentsStepsComponent', () => {
  let component: GrandServicePaymentsStepsComponent;
  let fixture: ComponentFixture<GrandServicePaymentsStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandServicePaymentsStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandServicePaymentsStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
