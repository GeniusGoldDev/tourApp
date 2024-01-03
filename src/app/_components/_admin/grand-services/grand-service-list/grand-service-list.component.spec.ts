import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandServiceListComponent } from './grand-service-list.component';

describe('GrandServiceListComponent', () => {
  let component: GrandServiceListComponent;
  let fixture: ComponentFixture<GrandServiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandServiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
