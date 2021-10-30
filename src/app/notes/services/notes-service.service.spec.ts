import { TestingModule } from 'src/app/testing.module';
import { TestBed } from '@angular/core/testing';

import { NotesServiceService } from './notes-service.service';

describe('NotesServiceService', () => {
  let service: NotesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[TestingModule]
    });
    service = TestBed.inject(NotesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
