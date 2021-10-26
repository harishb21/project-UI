import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllDiagnosisComponent } from './view-all-diagnosis.component';

describe('ViewAllDiagnosisComponent', () => {
  let component: ViewAllDiagnosisComponent;
  let fixture: ComponentFixture<ViewAllDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllDiagnosisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
