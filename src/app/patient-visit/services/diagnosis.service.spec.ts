import { TestBed } from '@angular/core/testing';
import { TestingModule } from 'src/app/testing.module';

import { DiagnosisService } from './diagnosis.service';

describe('DiagnosisService', () => {
  let service: DiagnosisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[TestingModule],
    });
    service = TestBed.inject(DiagnosisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
