import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DiagnosisMasterService } from './diagnosis-master.service';

describe('DiagnosisMasterService', () => {
  let service: DiagnosisMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    service = TestBed.inject(DiagnosisMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
