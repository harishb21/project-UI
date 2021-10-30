import { TestingModule } from './../../../testing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergyDialogComponent } from './allergy-dialog.component';

describe('AllergyDialogComponent', () => {
  let component: AllergyDialogComponent;
  let fixture: ComponentFixture<AllergyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[TestingModule
      ],
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
