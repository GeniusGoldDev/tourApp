import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourGridComponent } from './tour-grid.component';

describe('TourGridComponent', () => {
  let component: TourGridComponent;
  let fixture: ComponentFixture<TourGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
