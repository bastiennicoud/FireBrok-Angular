import { TestBed } from '@angular/core/testing';

import { AutomatonsService } from './automatons.service';

describe('AutomatonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutomatonsService = TestBed.get(AutomatonsService);
    expect(service).toBeTruthy();
  });
});
