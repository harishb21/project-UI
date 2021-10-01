import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendNotesComponent } from './send-notes.component';

describe('SendNotesComponent', () => {
  let component: SendNotesComponent;
  let fixture: ComponentFixture<SendNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule,RouterModule],
      declarations: [ SendNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});