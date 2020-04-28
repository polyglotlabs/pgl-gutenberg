import { TestBed } from '@angular/core/testing';

import { PglGutenbergService } from './pgl-gutenberg.service';

describe('PglGutenbergService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PglGutenbergService = TestBed.get(PglGutenbergService);
    expect(service).toBeTruthy();
  });
});
