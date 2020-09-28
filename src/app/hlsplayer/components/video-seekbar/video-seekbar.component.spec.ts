import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSeekbarComponent } from './video-seekbar.component';

describe('VideoSeekbarComponent', () => {
  let component: VideoSeekbarComponent;
  let fixture: ComponentFixture<VideoSeekbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSeekbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSeekbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
