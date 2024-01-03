import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandServiceComponent } from './grand-service.component';

describe('GrandServiceComponent', () => {
  let component: GrandServiceComponent;
  let fixture: ComponentFixture<GrandServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
