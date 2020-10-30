import { TestBed } from '@angular/core/testing';

import { VerivicaEmailService } from './verivica-email.service';

describe('VerivicaEmailService', () => {
  let service: VerivicaEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerivicaEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
