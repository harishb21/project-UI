import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientManagemtComponent } from './patient-managemt.component';

describe('PatientManagemtComponent', () => {
  let component: PatientManagemtComponent;
  let fixture: ComponentFixture<PatientManagemtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientManagemtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientManagemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
