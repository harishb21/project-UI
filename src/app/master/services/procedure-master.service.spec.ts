import { TestBed } from '@angular/core/testing';

import { ProcedureMasterService } from './procedure-master.service';

describe('ProcedureMasterService', () => {
  let service: ProcedureMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcedureMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
