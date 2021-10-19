import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyContactDialogComponent } from './emergency-contact-dialog.component';

describe('EmergencyContactDialogComponent', () => {
  let component: EmergencyContactDialogComponent;
  let fixture: ComponentFixture<EmergencyContactDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyContactDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyContactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
