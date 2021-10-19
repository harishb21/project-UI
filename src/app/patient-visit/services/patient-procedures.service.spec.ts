import { TestBed } from '@angular/core/testing';

import { PatientProceduresService } from './patient-procedures.service';

describe('PatientProceduresService', () => {
  let service: PatientProceduresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientProceduresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
