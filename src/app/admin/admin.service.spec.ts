import { Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AdminserviceService } from './admin.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';


describe('AdminService', () => {
  let service: AdminserviceService;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule,ToastrModule],
    });
    service = TestBed.inject(AdminserviceService);
  });

  it('should be created admin service', () => {
    expect(service).toBeTruthy();
  });
});
