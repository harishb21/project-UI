import { FormBuilder } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProceduresComponent } from './patient-procedures.component';
import { TestingModule } from 'src/app/testing.module';

describe('PatientProceduresComponent', () => {
  let component: PatientProceduresComponent;
  let fixture: ComponentFixture<PatientProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[TestingModule],
      declarations: [ PatientProceduresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
