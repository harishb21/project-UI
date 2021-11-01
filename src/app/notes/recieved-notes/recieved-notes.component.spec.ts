import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { Router, RouterModule } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { RecievedNotesComponent } from './recieved-notes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';

describe('RecievedNotesComponent', () => {
  let component: RecievedNotesComponent;
  let fixture: ComponentFixture<RecievedNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,MatDialogModule,
        MatSnackBarModule,HttpClientTestingModule,
        HttpClientModule,RouterTestingModule, RouterModule.forRoot([]),],
     // imports: [HttpClientTestingModule,HttpClientModule,RouterModule,ToastrModule],
      declarations: [ RecievedNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievedNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
