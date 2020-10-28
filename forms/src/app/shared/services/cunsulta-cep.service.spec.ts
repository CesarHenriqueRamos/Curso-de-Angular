import { TestBed } from '@angular/core/testing';

import { ConsultaCepService } from './consulta-cep.service';

describe('CunsultaCepService', () => {
  let service: ConsultaCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
