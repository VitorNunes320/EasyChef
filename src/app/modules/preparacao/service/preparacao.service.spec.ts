import { TestBed } from '@angular/core/testing';

import { PreparacaoService } from './preparacao.service';

describe('PreparacaoService', () => {
  let service: PreparacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreparacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
