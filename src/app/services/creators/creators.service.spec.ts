import { TestBed } from '@angular/core/testing';

import { CreatorsService } from './creators.service';

describe('CreatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatorsService = TestBed.get(CreatorsService);
    expect(service).toBeTruthy();
  });
});
