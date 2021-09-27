import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './../../angular-material.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagementComponent } from './employee-management.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';

describe('EmployeeManagementComponent', () => {
  let component: EmployeeManagementComponent;
  let fixture: ComponentFixture<EmployeeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,
        HttpClientModule,AngularMaterialModule,
         RouterTestingModule,ToastrModule.forRoot(),
         NgxPaginationModule, Ng2OrderModule,
         BrowserAnimationsModule
        ],
      declarations: [ EmployeeManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
