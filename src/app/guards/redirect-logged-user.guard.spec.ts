import { TestBed, async, inject } from '@angular/core/testing';

import { RedirectLoggedUserGuard } from './redirect-logged-user.guard';

describe('RedirectLoggedUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedirectLoggedUserGuard]
    });
  });

  it('should ...', inject([RedirectLoggedUserGuard], (guard: RedirectLoggedUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
