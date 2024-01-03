import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandServicePricingComponent } from './grand-service-pricing.component';

describe('GrandServicePricingComponent', () => {
  let component: GrandServicePricingComponent;
  let fixture: ComponentFixture<GrandServicePricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandServicePricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandServicePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
