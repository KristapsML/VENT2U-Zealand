import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupSelectTimeInfoModalComponent } from './startup-select-time-info-modal.component';

describe('StartupSelectTimeInfoModalComponent', () => {
  let component: StartupSelectTimeInfoModalComponent;
  let fixture: ComponentFixture<StartupSelectTimeInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupSelectTimeInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupSelectTimeInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
