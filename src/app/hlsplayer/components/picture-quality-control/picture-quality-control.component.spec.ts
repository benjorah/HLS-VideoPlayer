import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureQualityControlComponent } from './picture-quality-control.component';

describe('PictureQualityControlComponent', () => {
  let component: PictureQualityControlComponent;
  let fixture: ComponentFixture<PictureQualityControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureQualityControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureQualityControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
