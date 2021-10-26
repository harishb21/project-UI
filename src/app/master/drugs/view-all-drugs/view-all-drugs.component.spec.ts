import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllDrugsComponent } from './view-all-drugs.component';

describe('ViewAllDrugsComponent', () => {
  let component: ViewAllDrugsComponent;
  let fixture: ComponentFixture<ViewAllDrugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllDrugsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
