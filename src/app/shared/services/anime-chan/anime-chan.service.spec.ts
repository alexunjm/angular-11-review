import { TestBed } from '@angular/core/testing';

import { AnimeChanService } from './anime-chan.service';

describe('AnimeChanService', () => {
  let service: AnimeChanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeChanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
