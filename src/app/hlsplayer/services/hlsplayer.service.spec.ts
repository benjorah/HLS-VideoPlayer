import { TestBed } from '@angular/core/testing';

import { HlsplayerService } from './hlsplayer.service';

describe('HlsplayerService', () => {
  let service: HlsplayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HlsplayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
