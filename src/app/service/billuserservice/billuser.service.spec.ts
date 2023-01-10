import { TestBed } from '@angular/core/testing';

import { BilluserService } from './billuser.service';

describe('BilluserService', () => {
  let service: BilluserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BilluserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
