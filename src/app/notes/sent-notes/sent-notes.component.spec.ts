import { MatDialogModule } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentNotesComponent } from './sent-notes.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('SentNotesComponent', () => {
  let component: SentNotesComponent;
  let fixture: ComponentFixture<SentNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        MatDialogModule,
        MatSnackBarModule,HttpClientTestingModule,
        HttpClientModule,RouterTestingModule, RouterModule.forRoot([]),],
      //imports: [HttpClientTestingModule,HttpClientModule,RouterModule],
      declarations: [ SentNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
