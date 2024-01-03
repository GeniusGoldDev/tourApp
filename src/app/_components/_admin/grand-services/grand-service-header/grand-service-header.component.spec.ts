import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandServiceHeaderComponent } from './grand-service-header.component';

describe('GrandServiceHeaderComponent', () => {
  let component: GrandServiceHeaderComponent;
  let fixture: ComponentFixture<GrandServiceHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandServiceHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandServiceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
