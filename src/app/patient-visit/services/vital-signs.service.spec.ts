import { TestBed } from '@angular/core/testing';
import { TestingModule } from 'src/app/testing.module';

import { VitalSignsService } from './vital-signs.service';

describe('VitalSignsService', () => {
  let service: VitalSignsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[TestingModule]
    });
    service = TestBed.inject(VitalSignsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
