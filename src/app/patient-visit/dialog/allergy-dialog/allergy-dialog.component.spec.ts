import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergyDialogComponent } from './allergy-dialog.component';

describe('AllergyDialogComponent', () => {
  let component: AllergyDialogComponent;
  let fixture: ComponentFixture<AllergyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
