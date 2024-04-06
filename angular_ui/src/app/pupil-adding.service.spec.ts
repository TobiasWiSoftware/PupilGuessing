import { TestBed } from '@angular/core/testing';

import { PupilAddingService } from './pupil-adding.service';

describe('PupilService', () => {
  let service: PupilAddingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PupilAddingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
