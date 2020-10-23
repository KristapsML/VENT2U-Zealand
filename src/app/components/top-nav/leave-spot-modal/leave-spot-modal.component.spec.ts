import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveSpotModalComponent } from './leave-spot-modal.component';

describe('LeaveSpotModalComponent', () => {
  let component: LeaveSpotModalComponent;
  let fixture: ComponentFixture<LeaveSpotModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveSpotModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveSpotModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
