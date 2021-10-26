import { TestBed } from '@angular/core/testing';

import { DrugMasterService } from './drug-master.service';

describe('DrugMasterService', () => {
  let service: DrugMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrugMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
