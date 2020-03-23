import { TestBed } from '@angular/core/testing';

import { CaractersService } from './caracters.service';

describe('CharactersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaractersService = TestBed.get(CaractersService);
    expect(service).toBeTruthy();
  });
});
