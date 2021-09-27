import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './../../angular-material.module';
import { RouterModule } from '@angular/router';
import { PatientManagementComponent } from './patient-managemt.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

describe('PatientManagemtComponent', () => {
  let component: PatientManagementComponent;
  let fixture: ComponentFixture<PatientManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule,
        ToastrModule.forRoot(), BrowserAnimationsModule, RouterTestingModule,AngularMaterialModule],
      declarations: [ PatientManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create patient managment component', () => {
    expect(component).toBeTruthy();
  });
});
