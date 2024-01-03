import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandServiceCustomerListComponent } from './grand-service-customer-list.component';

describe('GrandServiceCustomerListComponent', () => {
  let component: GrandServiceCustomerListComponent;
  let fixture: ComponentFixture<GrandServiceCustomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandServiceCustomerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandServiceCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
