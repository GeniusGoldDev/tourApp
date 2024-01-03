import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandServiceCustomerDetailsComponent } from './grand-service-customer-details.component';

describe('GrandServiceCustomerDetailsComponent', () => {
  let component: GrandServiceCustomerDetailsComponent;
  let fixture: ComponentFixture<GrandServiceCustomerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandServiceCustomerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandServiceCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
