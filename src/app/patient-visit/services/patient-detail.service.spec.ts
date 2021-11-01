import { TestBed } from '@angular/core/testing';
import { TestingModule } from 'src/app/testing.module';

import { PatientDetailService } from './patient-detail.service';

describe('PatientDetailService', () => {
  let service: PatientDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[TestingModule],
    });
    service = TestBed.inject(PatientDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
