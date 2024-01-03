import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandServiceDetailsComponent } from './grand-service-details.component';

describe('GrandServiceDetailsComponent', () => {
  let component: GrandServiceDetailsComponent;
  let fixture: ComponentFixture<GrandServiceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandServiceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandServiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
