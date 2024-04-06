import { TestBed } from '@angular/core/testing';

import { PupilGameService } from './pupil-game.service';

describe('PupilGameService', () => {
  let service: PupilGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PupilGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
