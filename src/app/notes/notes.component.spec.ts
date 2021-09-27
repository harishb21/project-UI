import { AngularMaterialModule } from './../angular-material.module';
import { Router, RouterModule } from '@angular/router';
import { RecievedNotesComponent } from './recieved-notes/recieved-notes.component';
import { SentNotesComponent } from './sent-notes/sent-notes.component';
import { SendNotesComponent } from './send-notes/send-notes.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'
import { NotesComponent } from './notes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule,
        AngularMaterialModule,
        RouterTestingModule],
      declarations: [ 
        NotesComponent,
        SendNotesComponent,
        SentNotesComponent,
        RecievedNotesComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(NotesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should create the sent notes component', () => {
    const fixture = TestBed.createComponent(SentNotesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should create the send notes component', () => {
    const fixture = TestBed.createComponent(SendNotesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should create the recieved notes component', () => {
    const fixture = TestBed.createComponent(RecievedNotesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
