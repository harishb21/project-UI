import { TestBed } from '@angular/core/testing';
import { TestingModule } from 'src/app/testing.module';

import { VisitHistoryService } from './visit-history.service';

describe('VisitHistoryService', () => {
  let service: VisitHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[TestingModule],
    });
    service = TestBed.inject(VisitHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
