import { TestBed } from '@angular/core/testing';

import { CanDesactiveGuard } from './can-desactive.guard';

describe('CanDesactiveGuard', () => {
  let guard: CanDesactiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDesactiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
