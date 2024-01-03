import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandServiceImagesComponent } from './grand-service-images.component';

describe('GrandServiceImagesComponent', () => {
  let component: GrandServiceImagesComponent;
  let fixture: ComponentFixture<GrandServiceImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandServiceImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandServiceImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
