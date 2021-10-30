import { TestingModule } from 'src/app/testing.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProceduresComponent } from './view-all-procedures.component';

describe('ViewAllProceduresComponent', () => {
  let component: ViewAllProceduresComponent;
  let fixture: ComponentFixture<ViewAllProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[TestingModule],
      declarations: [ ViewAllProceduresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
