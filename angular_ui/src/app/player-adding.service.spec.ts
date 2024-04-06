import { TestBed } from '@angular/core/testing';

import { PlayerAddingService } from './player-adding.service';

describe('PlayerAddingServiceService', () => {
  let service: PlayerAddingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerAddingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
