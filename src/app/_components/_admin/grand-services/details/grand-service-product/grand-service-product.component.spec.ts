import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandServiceProductComponent } from './grand-service-product.component';

describe('GrandServiceProductComponent', () => {
  let component: GrandServiceProductComponent;
  let fixture: ComponentFixture<GrandServiceProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandServiceProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandServiceProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
