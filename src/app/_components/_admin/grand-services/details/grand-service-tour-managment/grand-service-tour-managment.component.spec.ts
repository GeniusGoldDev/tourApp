import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandServiceTourManagmentComponent } from './grand-service-tour-managment.component';

describe('GrandServiceTourManagmentComponent', () => {
  let component: GrandServiceTourManagmentComponent;
  let fixture: ComponentFixture<GrandServiceTourManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandServiceTourManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandServiceTourManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
