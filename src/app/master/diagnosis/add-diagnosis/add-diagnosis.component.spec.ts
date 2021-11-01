import { TestingModule } from 'src/app/testing.module';
import { FormBuilder } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiagnosisComponent } from './add-diagnosis.component';

describe('AddDiagnosisComponent', () => {
  let component: AddDiagnosisComponent;
  let fixture: ComponentFixture<AddDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[TestingModule],
      declarations: [ AddDiagnosisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
