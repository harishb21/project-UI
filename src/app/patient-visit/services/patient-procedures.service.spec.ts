import { TestBed } from '@angular/core/testing';
import { TestingModule } from 'src/app/testing.module';

import { PatientProceduresService } from './patient-procedures.service';

describe('PatientProceduresService', () => {
  let service: PatientProceduresService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[TestingModule],
    });
    service = TestBed.inject(PatientProceduresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
