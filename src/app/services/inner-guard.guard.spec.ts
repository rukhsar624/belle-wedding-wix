import { TestBed } from '@angular/core/testing';

import { InnerGuardGuard } from './inner-guard.guard';

describe('InnerGuardGuard', () => {
  let guard: InnerGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InnerGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
