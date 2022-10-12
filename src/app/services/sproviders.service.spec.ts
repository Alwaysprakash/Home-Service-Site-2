import { TestBed } from '@angular/core/testing';

import { SprovidersService } from './sproviders.service';

describe('SprovidersService', () => {
  let service: SprovidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SprovidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
