import { TestBed } from '@angular/core/testing';

import { VentService } from './vent.service';

describe('VentService', () => {
  let service: VentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
