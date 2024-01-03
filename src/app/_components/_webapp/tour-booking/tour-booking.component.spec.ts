import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourBookingComponent } from './tour-booking.component';

describe('TourBookingComponent', () => {
  let component: TourBookingComponent;
  let fixture: ComponentFixture<TourBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
